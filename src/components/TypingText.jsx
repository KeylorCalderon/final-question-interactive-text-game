import { useState, useEffect, useRef } from "react";

function TypingText({ text, speed = 40, animate = true }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(text);
      return;
    }

    setDisplayedText("");
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        const char = text[indexRef.current];

        setDisplayedText((prev) => prev + char);

        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span style={{ whiteSpace: "pre-line" }}>{displayedText}</span>;
}

export default TypingText;
