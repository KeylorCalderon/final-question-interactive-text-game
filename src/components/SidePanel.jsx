import { uiTranslations } from "../data/ui_translations";
import "../styles.css";

function SidePanel({
  isOpen,
  setIsOpen,
  language,
  setLanguage,
  textSpeed,
  setTextSpeed,
}) {
  return (
    <div className={`sidepanel ${isOpen ? "open" : ""}`}>
      <button
        className="sidepanel-btn close-btn cursor-target"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <div className="sections">
        <div className="section">
          <h3>{uiTranslations.language[language]}</h3>
          <button
            className="sidepanel-btn cursor-target"
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <button
            className="sidepanel-btn cursor-target"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <div className="section">
          <h3>{uiTranslations.textSpeed[language]}</h3>
          <input
            className="range-slider cursor-target"
            type="range"
            min="10"
            max="100"
            value={110 - textSpeed}
            onChange={(e) => setTextSpeed(110 - Number(e.target.value))}
          />
          <span>{110 - textSpeed}%</span>
        </div>

        <div className="section">
          <h3>{uiTranslations.about[language]}</h3>
          <p style={{ whiteSpace: "pre-line" }}>
            {uiTranslations.creatorDescription[language]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
