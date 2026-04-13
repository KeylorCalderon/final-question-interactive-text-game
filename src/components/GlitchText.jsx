import { useEffect, useState } from "react";
import "../styles.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ÑꙮΓΔΛΠΣΦΨΩඞ@#$%&*";

function GlitchText({ children }) {
  const [text, setText] = useState(children);

  useEffect(() => {
    const original = children;

    const interval = setInterval(() => {
      const newText = original
        .split("")
        .map((char) => {
          //La probabilidad se puede ajustar
          if (Math.random() < 0.035 && char !== " ") {
            return letters[Math.floor(Math.random() * letters.length)];
          }
          return char;
        })
        .join("");

      setText(newText);
    }, 450); //Lo mismo con la velocidad

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="glitch" data-text={text}>
      {text}
    </div>
  );
}

export default GlitchText;
