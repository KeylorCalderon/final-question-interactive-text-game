import { useState } from "react";
import { scenes } from "./data";
import OptionSelector from "./components/OptionSelector";

function App() {
  const [currentScene, setCurrentScene] = useState(1);

  const scene = scenes[currentScene];

  return (
    <>
      <div>
        <OptionSelector />
      </div>

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
    </>
  );
}

export default App;
