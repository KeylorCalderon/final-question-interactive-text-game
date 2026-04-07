import { useState } from "react";
import { scenes } from "./data";

function App() {
  const [currentScene, setCurrentScene] = useState(1);

  const scene = scenes[currentScene];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Juego de Novela</h1>

      <p>{scene.text}</p>

      <div>
        {scene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => setCurrentScene(choice.next)}
            style={{ display: "block", margin: "1rem 0" }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;