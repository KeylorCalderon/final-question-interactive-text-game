import { useState, useEffect, useRef } from "react";
import "../styles.css";

function TypingText({
  text,
  speed = 40,
  animate = true,
  skipTyping,
  setSkipTyping,
  setIsTyping,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(text);
      setIsTyping?.(false);
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let i = 0;
    setDisplayedText("");
    setIsTyping?.(true);

    intervalRef.current = setInterval(() => {
      //Soluciona error donde empezaba a imprimir etiquetas
      if (text[i] === "<") {
        //Si encuentra etiqueta brinca al final
        const closingIndex = text.indexOf(">", i);
        if (closingIndex !== -1) {
          i = closingIndex + 1; //Salta toda la etiqueta de una vez
        } else {
          i++; //En caso de que no hubiera cierre
        }
      } else {
        i++;
      }

      //Actualiza el texto en pantalla
      setDisplayedText(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTyping?.(false);
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed, animate]);

  useEffect(() => {
    if (!skipTyping) return;

    //Cancela el typing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setDisplayedText(text);
    setIsTyping?.(false);
    setSkipTyping?.(false);
  }, [skipTyping, text]);

  function renderStyledText(text) {
    const tagMap = {
      red: { color: "red" },
      green: { color: "limegreen" },
      blue: { color: "#4A9EFF" },
      i: { fontStyle: "italic" },
      strong: { fontWeight: "bold", fontSize: "1.3em" },
      entity: {
        color: "#c4b5fd",
        display: "inline-block",
        fontSize: "1.1em",
        textShadow: "0 0 4px #a78bfa, 0 0 8px #a78bfa",
        animation: "entityFuzzy 3s infinite ease-in-out",
        willChange: "filter",
      },
    };

    const root = [];
    const stack = [{ children: root }];

    let i = 0;
    let buffer = "";

    function flushText() {
      if (buffer) {
        stack[stack.length - 1].children.push(buffer);
        buffer = "";
      }
    }

    while (i < text.length) {
      if (text[i] === "<") {
        flushText();

        const isClosing = text[i + 1] === "<" ? false : text[i + 1] === "/";
        const match = text.slice(i).match(/^<\/?(\w+)>/);

        if (!match) {
          buffer += text[i];
          i++;
          continue;
        }

        const tag = match[1];
        const fullTag = match[0];

        if (!isClosing && tagMap[tag]) {
          const node = { tag, children: [] };
          stack[stack.length - 1].children.push(node);
          stack.push(node);
          i += fullTag.length;
          continue;
        }

        if (isClosing && stack.length > 1) {
          const current = stack[stack.length - 1];
          if (current.tag === tag) {
            stack.pop();
            i += fullTag.length;
            continue;
          }
        }
      }

      buffer += text[i];
      i++;
    }

    flushText();

    function build(nodes) {
      return nodes.map((node, idx) => {
        if (typeof node === "string") return node;

        return (
          <span key={idx} style={tagMap[node.tag]}>
            {build(node.children)}
          </span>
        );
      });
    }

    return build(root);
  }

  return (
    <span style={{ whiteSpace: "pre-line" }}>
      {renderStyledText(displayedText)}
    </span>
  );
}

export default TypingText;
