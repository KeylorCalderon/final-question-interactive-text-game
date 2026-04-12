import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, memo } from "react";
import "./Galaxy.css";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision mediump float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uDensity;
uniform float uGlowIntensity;
uniform float uSaturation;

varying vec2 vUv;

#define LAYERS 2.0

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float star(vec2 uv, float flare) {
  float d = length(uv);
  float m = 0.02 / d;

  float rays = max(0.0, 1.0 - abs(uv.x * uv.y * 500.0));
  m += rays * flare * 0.3;

  return m * smoothstep(0.5, 0.0, d);
}

vec3 starLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);

  for (int y = 0; y <= 1; y++) {
    for (int x = 0; x <= 1; x++) {
      vec2 offs = vec2(float(x), float(y));
      vec2 cell = id + offs;

      float n = hash(cell);
      float size = fract(n * 10.0);

      vec2 pos = gv - offs + vec2(n - 0.5);

      float flare = smoothstep(0.8, 1.0, size);
      float s = star(pos, flare);

      vec3 color = vec3(
        0.6 + 0.4 * hash(cell + 1.0),
        0.6 + 0.4 * hash(cell + 2.0),
        1.0
      );

      // 🎯 saturación optimizada
      float gray = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(gray), color, uSaturation);

      col += s * size * color;
    }
  }

  return col;
}

void main() {
  vec2 uv = (vUv * uResolution.xy - 0.5 * uResolution.xy) / uResolution.y;

  float t = uTime * uSpeed * 0.1;

  float c = cos(t);
  float s = sin(t);
  uv = mat2(c, -s, s, c) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / LAYERS) {
    float depth = fract(i + t);
    float scale = mix(15.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth;

    col += starLayer(uv * scale + i * 10.0) * fade;
  }

  col *= uGlowIntensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

function Galaxy({
  speed = 1.0,
  density = 1.0,
  glowIntensity = 1.0,
  saturation = 1.0,
  transparent = false,
  ...rest
}) {
  const ctnDom = useRef(null);

  useEffect(() => {
    if (!ctnDom.current) return;

    const ctn = ctnDom.current;

    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false,
    });

    const gl = renderer.gl;

    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0, 0, 0, 1);
    }

    let program;

    function resize() {
      const scale = 0.6;

      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;

      renderer.setSize(width * scale, height * scale);

      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";

      if (program) {
        program.uniforms.uResolution.value = new Color(
          width,
          height,
          width / height,
        );
      }
    }

    window.addEventListener("resize", resize);
    resize();

    const geometry = new Triangle(gl);

    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ),
        },
        uSpeed: { value: speed },
        uDensity: { value: density },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    let animateId;
    let last = 0;

    function update(t) {
      if (t - last < 33) {
        animateId = requestAnimationFrame(update);
        return;
      }

      last = t;

      program.uniforms.uTime.value = t * 0.001;

      renderer.render({ scene: mesh });

      animateId = requestAnimationFrame(update);
    }

    animateId = requestAnimationFrame(update);

    ctn.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [speed, density, glowIntensity, saturation, transparent]);

  return <div ref={ctnDom} className="galaxy-container" {...rest} />;
}

export default memo(Galaxy);
