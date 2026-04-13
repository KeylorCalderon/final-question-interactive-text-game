import { useState, useEffect, useRef } from "react";
import { scenes } from "./data/scenes/scenes_index";
import TargetCursor from "./components/TargetCursor";
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

  useEffect(() => {
    const historyElement = document.querySelector(".history");

    if (!historyElement) {
      return;
    }
    //Si está escribiendo bloquea el scroll
    if (isTyping) {
      historyElement.style.overflowY = "hidden";
    }
    //Si no, lo permite
    else {
      historyElement.style.overflowY = "auto";
    }
  }, [isTyping]);

  const handleChoice = (choice) => {
    //Guarda elección
    setHistory((prev) => [...prev, { type: "choice", choice }]);

    //Manejo de obtención y consumo de items(no se usa en la historia actual)
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
    //-----------------------------------------------------------------------
    setCurrentScene(choice.next);

    setHistory((prev) => [...prev, { type: "scene", sceneId: choice.next }]);
  };

  const scene = scenes[currentScene];

  //Oculta las escenas no disponibles, esto funciona junto a la opción de dar items(Tampoco se usa en la historia actual)
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
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Galaxy speed={1.0} density={1.0} glowIntensity={0.3} saturation={0.0} />
      <div className="ui">
        <GlitchText>THE FINAL QUESTION</GlitchText>
        <div className="history">
          <History
            history={history}
            language={language}
            isTyping={isTyping}
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
          <button className="cursor-target" onClick={() => setLanguage("es")}>
            ES
          </button>
          <button className="cursor-target" onClick={() => setLanguage("en")}>
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
