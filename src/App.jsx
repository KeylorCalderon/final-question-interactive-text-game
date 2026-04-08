import { useState, useEffect } from "react";
import { scenes } from "./data";
import Choices from "./components/Choices";
import History from "./components/History";

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [inventory, setInventory] = useState([]);
  const [usedChoices, setUsedChoices] = useState([]);
  const [history, setHistory] = useState([]);

  //Inicializa la historia
  useEffect(() => {
    const firstScene = scenes[1];
    setHistory([{ type: "scene", text: firstScene.text }]);
  }, []);

  const handleChoice = (choice) => {
    //Agrega decisión al historial
    setHistory((prev) => [...prev, { type: "choice", text: choice.text }]);

    //Da un item
    if (choice.givesItem) {
      if (!inventory.includes(choice.givesItem)) {
        setInventory((prev) => [...prev, choice.givesItem]);
      }

      if (choice.id) {
        setUsedChoices((prev) => [...prev, choice.id]);
      }

      setHistory((prev) => [
        ...prev,
        { type: "scene", text: "Has obtenido: " + choice.givesItem },
      ]);

      return;
    }

    //Consume el item
    if (choice.consumesItem) {
      setInventory((prev) =>
        prev.filter((item) => item !== choice.consumesItem),
      );
    }

    //Avanza a la siguiente scene
    const nextScene = scenes[choice.next];
    setCurrentScene(choice.next);

    setHistory((prev) => [...prev, { type: "scene", text: nextScene.text }]);
  };

  const scene = scenes[currentScene];

  const visibleChoices = scene.choices.filter(
    (choice) => !usedChoices.includes(choice.id),
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>THE FINAL QUESTION</h1>

      <History history={history} />

      <Choices
        choices={visibleChoices}
        onSelect={handleChoice}
        inventory={inventory}
      />

      <div>
        <h3>Inventario:</h3>
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
