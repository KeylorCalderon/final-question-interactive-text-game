import { itemTranslations } from "../data/scenes/scenes_index";

function Choices({ choices, onSelect, inventory, language, isTyping }) {
  if (isTyping) {
    return null;
  }

  //Se alcanzó el fin de la historia
  if (!choices.length) {
    return <p>----------</p>;
  }

  return (
    <div>
      {choices.map((choice, index) => {
        const isLocked =
          choice.requiresItem && !inventory.includes(choice.requiresItem);

        return (
          <button
            className="cursor-target"
            key={index}
            onClick={() => onSelect(choice)}
            disabled={isLocked}
          >
            {choice.text[language]}
            {isLocked &&
              ` (${language === "es" ? "necesitas" : "you need"} ${
                itemTranslations[choice.requiresItem][language]
              })`}
          </button>
        );
      })}
    </div>
  );
}

export default Choices;
