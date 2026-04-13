import { useEffect, useRef } from "react";
import TypingText from "./TypingText";
import { scenes, itemTranslations } from "../data/scenes/scenes_index";

function History({
  history,
  language,
  isTyping,
  setIsTyping,
  skipTyping,
  setSkipTyping,
}) {
  const prevLanguage = useRef(language);
  const languageChanged = prevLanguage.current !== language;

  useEffect(() => {
    prevLanguage.current = language;
  }, [language]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (!skipTyping) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [skipTyping]);

  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping]);

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
      <div ref={bottomRef} />
    </div>
  );
}

export default History;
