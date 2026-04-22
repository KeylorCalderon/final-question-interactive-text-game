import { useState, useEffect, useRef } from "react";
import { scenes } from "./data/scenes/scenes_index";
import TargetCursor from "./components/TargetCursor";
import Choices from "./components/Choices";
import History from "./components/History";
import GlitchText from "./components/GlitchText";
import Galaxy from "./components/Galaxy";
import SidePanel from "./components/SidePanel";
import Bracelet from "./components/Bracelet";
import Song from "./assets/lemonmusiclab-dark-ambient-soundscape.mp3";
import "./styles.css";

function App() {
  const [currentScene, setCurrentScene] = useState("000_intro_start");
  const [inventory, setInventory] = useState([]);
  const [usedChoices, setUsedChoices] = useState([]);
  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState("en");
  const [isTyping, setIsTyping] = useState(false);
  const [skipTyping, setSkipTyping] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [textSpeed, setTextSpeed] = useState(40);
  const [lines, setLines] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

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

    //Si no hay suficientes líneas no puede elegirla, volver acá LUEGO
    if (choice.requiresLines && lines < choice.requiresLines) {
      return;
    }

    if (choice.givesLines) {
      setLines((prev) => prev + choice.givesLines);
    }

    if (choice.requiresLines) {
      setLines((prev) => prev - choice.requiresLines);
    }

    setIsTyping(true);
    setCurrentScene(choice.next);

    setHistory((prev) => [...prev, { type: "scene", sceneId: choice.next }]);
  };

  const scene = scenes[currentScene];

  //Oculta las escenas no disponibles, esto funciona junto a la opción de dar items(Tampoco se usa en la historia actual)
  const visibleChoices = scene.choices.filter(
    (choice) => !usedChoices.includes(choice.id),
  );

  //Para eliminar el brazalete al final
  useEffect(() => {
    if (gameStarted && visibleChoices.length === 0) {
      setLines(0);
    }
  }, [visibleChoices, gameStarted]);

  //Para activar la música al iniciar
  useEffect(() => {
    if (!gameStarted) return;
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.5;
    audio.loop = true;

    audio.play().catch((e) => {
      console.log("Audio blocked:", e);
    });
  }, [gameStarted]);

  //Para activar/desactivar la música
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div>
      <audio ref={audioRef} src={Song} preload="auto" />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Galaxy speed={1.0} density={1.0} glowIntensity={0.3} saturation={0.0} />
      {!gameStarted && (
        <div className="ui">
          <GlitchText variant="intro">THE FINAL QUESTION</GlitchText>
          <button
            className="start-button cursor-target"
            onClick={() => {
              setGameStarted(true);

              if (audioRef.current) {
                audioRef.current.play().catch((e) => {
                  console.log("Autoplay blocked:", e);
                });
              }
            }}
          >
            ▶ PLAY
          </button>
          <div className="start-links">
            <button
              className="start-link-btn cursor-target"
              onClick={() =>
                window.open("https://keylor-portfolio.vercel.app/", "_blank")
              }
            >
              About me
            </button>
            <button
              className="start-link-btn cursor-target"
              onClick={() =>
                window.open(
                  "https://github.com/KeylorCalderon/final-question-interactive-text-game",
                  "_blank",
                )
              }
            >
              GitHub
            </button>
          </div>
        </div>
      )}
      {gameStarted && (
        <div className="ui">
          <GlitchText>THE FINAL QUESTION</GlitchText>

          <div className="history-bracelet">
            <div
              className="history"
              onClick={() => {
                if (isTyping) {
                  setSkipTyping(true);
                }
              }}
            >
              <History
                history={history}
                language={language}
                isTyping={isTyping}
                setIsTyping={setIsTyping}
                skipTyping={skipTyping}
                setSkipTyping={setSkipTyping}
                textSpeed={textSpeed}
              />
            </div>
            <div className={`bracelet ${lines <= 0 ? "hidden" : ""}`}>
              <Bracelet lines={lines} language={language} />
            </div>
          </div>
          <div className="choices">
            <Choices
              choices={visibleChoices}
              onSelect={handleChoice}
              inventory={inventory}
              language={language}
              isTyping={isTyping}
              lines={lines}
            />
          </div>

          <button
            className="panel-toggle cursor-target"
            onClick={() => setIsPanelOpen(!isPanelOpen)}
          >
            ☰
          </button>
        </div>
      )}
      <SidePanel
        isOpen={isPanelOpen}
        setIsOpen={setIsPanelOpen}
        language={language}
        setLanguage={setLanguage}
        textSpeed={textSpeed}
        setTextSpeed={setTextSpeed}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
    </div>
  );
}

export default App;
