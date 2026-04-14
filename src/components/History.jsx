import { useEffect, useRef } from "react";
import TypingText from "./TypingText";
import { scenes, itemTranslations } from "../data/scenes/scenes_index";

function History({
  history, //Array que tiene todo el historial
  language, //El idioma, en este caso ESpañol o ENglish
  isTyping, //Si se está typeando
  setIsTyping, //Función para activar o desactivar el typeo
  skipTyping, //Si el usuario salta el typeo
  setSkipTyping, //Función para cambiar el estado del skipTyping
  textSpeed, //Velocidad del texo
}) {
  const prevLanguage = useRef(language);
  //Boolean que será true cuando se cambie el lenguaje
  const languageChanged = prevLanguage.current !== language;

  useEffect(() => {
    prevLanguage.current = language;
  }, [language]);

  const bottomRef = useRef(null);

  //Scrollea cuando se añade algo nuevo
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  //Scrollea si el jugador se salta el typeo
  useEffect(() => {
    if (!skipTyping) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [skipTyping]);

  //Scrollea de forma continua si se está typeando
  useEffect(() => {
    if (!isTyping) {
      return;
    }

    const interval = setInterval(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <div>
      {history.map((entry, index) => {
        //Boolean que será true si el elemento es el último
        const isLast = index === history.length - 1;

        //Boolean que será true si el elemento ES el último y el lenguage NO ha cambiado
        const shouldAnimate = isLast && !languageChanged;
        console.log("ENTRADA 1");
        console.log("shouldAnimate", shouldAnimate, entry);

        if (entry.type === "scene") {
          const text = scenes[entry.sceneId].text[language];

          return (
            <p key={entry.sceneId + index}>
              <TypingText
                text={text}
                animate={shouldAnimate}
                setIsTyping={setIsTyping}
                skipTyping={skipTyping}
                setSkipTyping={setSkipTyping}
                textSpeed={textSpeed}
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
