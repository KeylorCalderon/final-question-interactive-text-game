import { useState, useEffect } from "react";
import { scenes, itemTranslations } from "./data";
import Choices from "./components/Choices";
import History from "./components/History";

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [inventory, setInventory] = useState([]);
  const [usedChoices, setUsedChoices] = useState([]);
  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState("es");
  const [isTyping, setIsTyping] = useState(false);
  const [skipTyping, setSkipTyping] = useState(false);

  //Inicializa la historia
  useEffect(() => {
    setHistory([{ type: "scene", sceneId: 1 }]);
  }, []);

  const handleChoice = (choice) => {
    //Guarda elección
    setHistory((prev) => [...prev, { type: "choice", choice }]);

    if (choice.givesItem) {
      if (!inventory.includes(choice.givesItem)) {
        setInventory((prev) => [...prev, choice.givesItem]);
      }

      if (choice.id) {
        setUsedChoices((prev) => [...prev, choice.id]);
      }

      setHistory((prev) => [...prev, { type: "item", item: choice.givesItem }]);

      return;
    }

    if (choice.consumesItem) {
      setInventory((prev) =>
        prev.filter((item) => item !== choice.consumesItem),
      );
    }

    setCurrentScene(choice.next);

    setHistory((prev) => [...prev, { type: "scene", sceneId: choice.next }]);
  };

  const scene = scenes[currentScene];

  const visibleChoices = scene.choices.filter(
    (choice) => !usedChoices.includes(choice.id),
  );

  return (
    <div
      style={{ padding: "2rem", fontFamily: "sans-serif" }}
      onClick={() => {
        if (isTyping) {
          setSkipTyping(true);
        }
      }}
    >
      <h1>THE FINAL QUESTION</h1>

      <History
        history={history}
        language={language}
        setIsTyping={setIsTyping}
        skipTyping={skipTyping}
        setSkipTyping={setSkipTyping}
      />

      <Choices
        choices={visibleChoices}
        onSelect={handleChoice}
        inventory={inventory}
        language={language}
        isTyping={isTyping}
      />

      <div>
        <h3>Inventario:</h3>
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{itemTranslations[item][language]}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => setLanguage("es")}>ES</button>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
}

export default App;
