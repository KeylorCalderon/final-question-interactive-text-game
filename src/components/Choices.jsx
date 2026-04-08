function Choices({ choices, onSelect, inventory }) {
  if (!choices.length) {
    return <p></p>;
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
            {choice.text}
            {isLocked && ` (necesitas ${choice.requiresItem})`}
          </button>
        );
      })}
    </div>
  );
}

export default Choices;
