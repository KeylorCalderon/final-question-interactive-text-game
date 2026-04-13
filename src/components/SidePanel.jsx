import { useState, useRef, useEffect } from "react";
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
        className="close-btn cursor-target"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      <h2>Settings</h2>

      <div className="section">
        <div className="languages">
          <h3>Idioma</h3>
          <button className="cursor-target" onClick={() => setLanguage("es")}>
            ES
          </button>
          <button className="cursor-target" onClick={() => setLanguage("en")}>
            EN
          </button>
        </div>
      </div>

      <div className="section">
        <h3>Velocidad de texto</h3>
        <input
          className="cursor-target"
          type="range"
          min="10"
          max="100"
          value={textSpeed}
          onChange={(e) => setTextSpeed(Number(e.target.value))}
        />
        <span>{textSpeed} ms</span>
      </div>

      {"Keylor Calderón Vega"}
      <div className="section">
        <h3>Sobre el creador</h3>
        <p>
          Proyecto creado por Keylor Calderón Vega.
          <br />
          Narrativa interactiva de texto.
        </p>
      </div>
    </div>
  );
}

export default SidePanel;
