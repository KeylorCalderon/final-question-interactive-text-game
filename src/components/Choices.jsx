import { itemTranslations } from "../data/scenes/scenes_index";

function Choices({ choices, onSelect, inventory, language, isTyping }) {
  if (isTyping) {
    return null;
  }

  if (!choices.length) {
    return <p>---</p>;
  }

  return (
    <div>
      {choices.map((choice, index) => {
        const isLocked =
          choice.requiresItem && !inventory.includes(choice.requiresItem);

        return (
          <button
            key={index}
            onClick={() => onSelect(choice)}
            disabled={isLocked}
            style={{
              display: "block",
              margin: "1rem 0",
              opacity: isLocked ? 0.5 : 1,
            }}
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
