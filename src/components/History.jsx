import { useEffect, useRef } from "react";
import TypingText from "./TypingText";

function History({ history }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div>
      {history.map((entry, index) => {
        const isLast = index === history.length - 1;

        return (
          <p key={index}>
            {entry.type === "choice" ? (
              `> ${entry.text}`
            ) : isLast ? (
              <TypingText text={entry.text} />
            ) : (
              <span style={{ whiteSpace: "pre-line" }}>{entry.text}</span>
            )}
          </p>
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
}

export default History;
