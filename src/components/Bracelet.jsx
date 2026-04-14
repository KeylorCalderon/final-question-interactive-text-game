import { uiTranslations } from "../data/ui_translations";

const Bracelet = ({ lines, language }) => {
  const maxLines = 20;
  const lineSymbol = "︴";

  const clamped = Math.max(0, Math.min(lines, maxLines));
  const display = Array.from({ length: clamped })
    .map(() => lineSymbol)
    .join(" ");
  return (
    <div className="bracelet-inner">
      <span className="bracelet-label">{uiTranslations.lines[language]}</span>
      <span className="bracelet-value">{display}</span>
    </div>
  );
};

export default Bracelet;
