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

  function renderStyledText(text) {
    const tagMap = {
      red: { color: "red" },
      green: { color: "limegreen" },
      blue: { color: "blue" },
      i: { fontStyle: "italic" },
      strong: { fontWeight: "bold" },
    };

    function parseText(input) {
      const result = [];
      let i = 0;
      const len = input.length;

      while (i < len) {
        if (input[i] === "<" && input[i + 1] !== "/") {
          const match = input.slice(i).match(/^<(\w+)>/);
          if (match) {
            const tagName = match[1];
            const style = tagMap[tagName];
            if (style) {
              const closingTag = `</${tagName}>`;
              const endIndex = input.indexOf(closingTag, i + match[0].length);

              if (endIndex !== -1) {
                const innerText = input.slice(i + match[0].length, endIndex);
                // Recursión para manejar nesting
                result.push(
                  <span key={result.length} style={style}>
                    {parseText(innerText)}
                  </span>,
                );
                i = endIndex + closingTag.length;
                continue;
              }
            }
          }
        }
        let j = i;
        while (j < len && input[j] !== "<") j++;
        if (j > i) {
          result.push(input.slice(i, j));
        }
        i = j;
      }
      return result;
    }

    return parseText(text);
  }

  return (
    <span style={{ whiteSpace: "pre-line" }}>
      {renderStyledText(displayedText)}
    </span>
  );
}

export default TypingText;
