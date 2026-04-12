import { useState, useEffect } from "react";
import { scenes, itemTranslations } from "./data/scenes/scenes_index";
import Choices from "./components/Choices";
import History from "./components/History";
import GlitchText from "./components/GlitchText";
import Galaxy from "./components/Galaxy";
import "./styles.css";

function App() {
  const [currentScene, setCurrentScene] = useState("000_intro_start");
  const [inventory, setInventory] = useState([]);
  const [usedChoices, setUsedChoices] = useState([]);
  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState("es");
  const [isTyping, setIsTyping] = useState(false);
  const [skipTyping, setSkipTyping] = useState(false);

  //Inicializa la historia
  useEffect(() => {
    setHistory([{ type: "scene", sceneId: "000_intro_start" }]);
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
      style={{ position: "relative", width: "100%", height: "100vh" }}
      onClick={() => {
        if (isTyping) {
          setSkipTyping(true);
        }
      }}
    >
      <Galaxy
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1}
      />
      <div className="ui">
        <GlitchText>THE FINAL QUESTION</GlitchText>
        <div className="history">
          <History
            history={history}
            language={language}
            setIsTyping={setIsTyping}
            skipTyping={skipTyping}
            setSkipTyping={setSkipTyping}
          />
        </div>
        <div className="choices">
          <Choices
            choices={visibleChoices}
            onSelect={handleChoice}
            inventory={inventory}
            language={language}
            isTyping={isTyping}
          />
        </div>
        <div className="languages">
          <button onClick={() => setLanguage("es")}>ES</button>
          <button onClick={() => setLanguage("en")}>EN</button>
        </div>
      </div>
    </div>
  );
}

export default App;
