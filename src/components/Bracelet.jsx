import { uiTranslations } from "../data/ui_translations";

const Bracelet = ({ lines, language }) => {
  return (
    <div className="bracelet-inner">
      <span className="bracelet-label">{uiTranslations.lines[language]}</span>
      <span className="bracelet-value">{lines}</span>
    </div>
  );
};

export default Bracelet;
