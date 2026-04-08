import { itemTranslations } from "../data";

function Choices({ choices, onSelect, inventory, language }) {
  if (!choices.length) {
    return <p>Fin de la historia.</p>;
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
            style={{ display: "block", margin: "1rem 0" }}
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
