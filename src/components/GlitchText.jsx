import { useEffect, useState } from "react";
import "../styles.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*";

function GlitchText({ children }) {
  const [text, setText] = useState(children);

  useEffect(() => {
    const original = children;

    const interval = setInterval(() => {
      const newText = original
        .split("")
        .map((char) => {
          //Prob can be adjust
          if (Math.random() < 0.035 && char !== " ") {
            return letters[Math.floor(Math.random() * letters.length)];
          }
          return char;
        })
        .join("");

      setText(newText);
    }, 450); //Same with velocity

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="glitch" data-text={text}>
      {text}
    </div>
  );
}

export default GlitchText;
