import { useEffect, useRef } from "react";
import TypingText from "./TypingText";
import { scenes, itemTranslations } from "../data/scenes/scenes_index";

function History({
  history,
  language,
  setIsTyping,
  skipTyping,
  setSkipTyping,
}) {
  const prevLanguage = useRef(language);
  const languageChanged = prevLanguage.current !== language;

  useEffect(() => {
    prevLanguage.current = language;
  }, [language]);

  return (
    <div>
      {history.map((entry, index) => {
        const isLast = index === history.length - 1;

        const shouldAnimate = isLast && !languageChanged;

        if (entry.type === "scene") {
          const text = scenes[entry.sceneId].text[language];

          return (
            <p key={index}>
              <TypingText
                text={text}
                animate={shouldAnimate}
                setIsTyping={setIsTyping}
                skipTyping={skipTyping}
                setSkipTyping={setSkipTyping}
              />
            </p>
          );
        }

        if (entry.type === "choice") {
          return <p key={index}>{"> " + entry.choice.text[language]}</p>;
        }

        if (entry.type === "item") {
          const itemName = itemTranslations[entry.item][language];

          const text =
            language === "es"
              ? `Has obtenido: ${itemName}`
              : `You got: ${itemName}`;

          return (
            <p key={index}>
              <TypingText
                text={text}
                animate={shouldAnimate}
                setIsTyping={setIsTyping}
                skipTyping={skipTyping}
                setSkipTyping={setSkipTyping}
              />
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

export default History;
