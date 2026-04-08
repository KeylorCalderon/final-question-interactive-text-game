import { useState, useEffect, useRef } from "react";

function TypingText({
  text,
  speed = 40,
  animate = true,
  skipTyping,
  setSkipTyping,
  setIsTyping,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(text);
      return;
    }

    setDisplayedText("");
    indexRef.current = 0;
    setIsTyping?.(true);

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        const char = text[indexRef.current];

        setDisplayedText((prev) => prev + char);
        indexRef.current += 1;
      } else {
        setIsTyping?.(false);
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed, animate]);

  useEffect(() => {
    if (skipTyping) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setDisplayedText(text);

      setIsTyping?.(false);
      setSkipTyping?.(false);
    }
  }, [skipTyping, text]);

  return <span style={{ whiteSpace: "pre-line" }}>{displayedText}</span>;
}

export default TypingText;
