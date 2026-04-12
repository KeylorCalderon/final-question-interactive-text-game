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

    const root = [];
    const stack = [{ children: root }];

    let i = 0;
    let buffer = "";

    function flushText() {
      if (buffer) {
        stack[stack.length - 1].children.push(buffer);
        buffer = "";
      }
    }

    while (i < text.length) {
      if (text[i] === "<") {
        //Flush pending text before the tag
        flushText();

        const isClosing = text[i + 1] === "/";
        const match = text.slice(i).match(/^<\/?(\w+)>/);

        if (!match) {
          buffer += text[i];
          i++;
          continue;
        }

        const tag = match[1];
        const fullTag = match[0];

        //Opening tags
        if (!isClosing && tagMap[tag]) {
          const node = { tag, children: [] };
          stack[stack.length - 1].children.push(node);
          stack.push(node);
          i += fullTag.length;
          continue;
        }

        //The closing tags
        if (isClosing && stack.length > 1) {
          const current = stack[stack.length - 1];
          if (current.tag === tag) {
            stack.pop();
            i += fullTag.length;
            continue;
          }
        }
      }

      buffer += text[i];
      i++;
    }

    flushText();

    function build(nodes) {
      return nodes.map((node, idx) => {
        if (typeof node === "string") return node;

        return (
          <span key={idx} style={tagMap[node.tag]}>
            {build(node.children)}
          </span>
        );
      });
    }

    return build(root);
  }

  return (
    <span style={{ whiteSpace: "pre-line" }}>
      {renderStyledText(displayedText)}
    </span>
  );
}

export default TypingText;
