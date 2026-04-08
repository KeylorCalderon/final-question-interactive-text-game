import { useEffect, useRef } from "react";
import TypingText from "./TypingText";
import { scenes } from "../data";
import { itemTranslations } from "../data";

function History({ history, language }) {
  const prevLanguage = useRef(language);
  const languageChanged = prevLanguage.current !== language;

  useEffect(() => {
    prevLanguage.current = language;
  }, [language]);

  return (
    <div>
      {history.map((entry, index) => {
        const isLast = index === history.length - 1;

        // ❗ SOLO animar si:
        // - es el último
        // - NO cambió idioma
        const shouldAnimate = isLast && !languageChanged;

        // 🟡 SCENE
        if (entry.type === "scene") {
          const text = scenes[entry.sceneId].text[language];

          return (
            <p key={index}>
              <TypingText text={text} animate={shouldAnimate} />
            </p>
          );
        }

        // 🔵 CHOICE (sin animación)
        if (entry.type === "choice") {
          return <p key={index}>{"> " + entry.choice.text[language]}</p>;
        }

        // 🟢 ITEM (sí animación)
        if (entry.type === "item") {
          const itemName = itemTranslations[entry.item][language];

          const text =
            language === "es"
              ? `Has obtenido: ${itemName}`
              : `You got: ${itemName}`;

          return (
            <p key={index}>
              <TypingText text={text} animate={shouldAnimate} />
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

export default History;
