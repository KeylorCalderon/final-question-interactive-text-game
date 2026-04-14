import { narrationTranslations } from "../data/scenes/scenes_index";

function Choices({ choices, onSelect, inventory, language, isTyping, lines }) {
  if (isTyping) {
    return null;
  }

  //Se alcanzó el fin de la historia
  if (!choices.length) {
    return (
      <p className="ending-text">
        <i>---{narrationTranslations.ending[language]}---</i>
      </p>
    );
  }

  return (
    <div>
      {choices.map((choice, index) => {
        const isLocked =
          (choice.requiresItem && !inventory.includes(choice.requiresItem)) ||
          (choice.requiresLines && lines < choice.requiresLines);

        return (
          <button
            className={`choice-button ${isLocked ? "locked" : "cursor-target"}`}
            key={index}
            onClick={() => onSelect(choice)}
            disabled={isLocked}
          >
            {choice.text[language]}
            {isLocked &&
              choice.requiresLines &&
              !choice.requiresItem &&
              ` (${narrationTranslations.need[language]} ${
                choice.requiresLines
              } ${narrationTranslations.lines[language]})`}
          </button>
        );
      })}
    </div>
  );
}

export default Choices;
