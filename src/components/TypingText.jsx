import { useState, useEffect, useRef } from "react";
import "../styles.css";

function TypingText({
  text,
  textSpeed,
  animate = true,
  skipTyping,
  setSkipTyping,
  setIsTyping,
}) {
  //El texto que se muestra en pantalla
  const [displayedText, setDisplayedText] = useState("");
  //Acá guarda la referencia al setInterval para luego poder pararlo
  const intervalRef = useRef(null);
  //Referencia al índice para cuando se aumenta o disminuye la velocidad
  const indexRef = useRef(0);

  //Como se duplicaba la lógica del intervalo, la saqué en una función
  function startTypingInterval(speed) {
    //Evita la duplicación de intervalos
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      //Ahora retoma el texto donde quedó en caso de cambio de velocidad
      let i = indexRef.current;
      //Soluciona el error donde empezaba a imprimir etiquetas
      if (text[i] === "<") {
        //Si encuentra etiqueta brinca al final
        const closingIndex = text.indexOf(">", i);
        if (closingIndex !== -1) {
          i = closingIndex + 1; //Salta toda la etiqueta de una vez
        } else {
          i++; //En caso de que no hubiera cierre
        }
      } else {
        i++;
      }

      indexRef.current = i;
      //Actualiza el texto en pantalla
      setDisplayedText(text.slice(0, i));
      //Cuando acaba el intervalo
      if (i >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTyping?.(false);
      }
    }, speed);
  }

  useEffect(() => {
    const isCompleted = displayedText === text && !intervalRef.current;

    //Este es el caso cuando cambia de idioma mientras escribe
    if (animate && !isCompleted) {
      indexRef.current = 0;
      setDisplayedText("");
      setIsTyping?.(true);

      startTypingInterval(textSpeed);
      return;
    }

    //Si no debe animarlo, muestra el texto de golpe y desactiva el typeo
    if (!animate) {
      setDisplayedText(text);
      setIsTyping?.(false);
      return;
    }

    //Evita que haya intervalos "zombies" corriendo
    //NOTA: Se ejecuta antes de correr el useEffect o cuando se quita TypingText
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, animate]);

  //Para la velocidad de texto
  useEffect(() => {
    //No se hace nada si no se está typeando
    if (!intervalRef.current) {
      return;
    }
    startTypingInterval(textSpeed);
  }, [textSpeed]);

  //Este es para saltar el typeo
  useEffect(() => {
    if (!skipTyping) {
      return;
    }

    //Cancela el typeo
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    indexRef.current = text.length;
    //Muestra todo el texto de una
    setDisplayedText(text);
    setIsTyping?.(false);
    setSkipTyping?.(false);
  }, [skipTyping, text]);

  //Función que aplica estilos a las etiquetas del texto
  //Parsea texto y lo convierte en nodos para luego pasarlos a elementos de React
  function renderStyledText(text) {
    //Lo que aplica a cada etiqueta
    const tagMap = {
      red: { color: "red" },
      green: { color: "limegreen" },
      blue: { color: "#4A9EFF" },
      i: { fontStyle: "italic" },
      strong: { fontWeight: "bold", fontSize: "1.3em" },
      entity: {
        color: "#c4b5fd",
        display: "inline-block",
        fontSize: "1.1em",
        textShadow: "0 0 4px #a78bfa, 0 0 8px #a78bfa",
        animation: "entityFuzzy 3s infinite ease-in-out",
        willChange: "filter",
      },
    };

    //Donde se guarda la estructura final
    const root = [];
    //Pila para manejar etiquetas anidadas (Cuando habla en ente más que todo)
    const stack = [{ children: root }];

    let i = 0;
    let buffer = "";

    function flushText() {
      //Almacena el texto en la pila y limpia el buffer
      if (buffer) {
        stack[stack.length - 1].children.push(buffer);
        buffer = "";
      }
    }

    while (i < text.length) {
      //Si encuentra una etiqueta
      if (text[i] === "<") {
        //Llama a flushText
        flushText();

        //Verifica si es una etiqueta de cierre
        const isClosing = text[i + 1] === "/";
        //Expresión regular que captura el tipo de etiqueta
        const match = text.slice(i).match(/^<\/?(\w+)>/);

        //Si hay un error solo añade el "<" y continua
        if (!match) {
          buffer += text[i];
          i++;
          continue;
        }

        //La etiqueta completa, por ejemplo "<red>""
        const tag = match[1];
        //Solo el tag de la etiqueta, por ejemplo "red"
        const fullTag = match[0];

        //Si es una etiqueta de apertura y es válida en el tagMap
        if (!isClosing && tagMap[tag]) {
          //Crea un nodo
          const node = { tag, children: [] };
          //Lo mete al final de la pila
          stack[stack.length - 1].children.push(node);
          stack.push(node);
          //Adelanta el índice para que se salte toda la etiqueta
          i += fullTag.length;
          continue;
        }

        //Si es una etiqueta de cierre y la pila tiene la de apertura
        if (isClosing && stack.length > 1) {
          const current = stack[stack.length - 1];
          //Verifica que sea el mismo tag de apertura
          if (current.tag === tag) {
            //Vuelve al nivel anterior
            stack.pop();
            //Adelanta el índice para que se salte toda la etiqueta
            i += fullTag.length;
            continue;
          }
        }
      }
      //Añade el carácter al buffer
      buffer += text[i];
      i++;
    }
    //Última llamada al flushText
    flushText();

    //Función que transforma los nodos en elementos React
    function buildReactElements(nodes) {
      return nodes.map((node, idNode) => {
        //Si es texto plano lo devuelve tal cuál
        if (typeof node === "string") {
          return node;
        }

        //Si no, devuelve un span con el estilo del tagMap
        //Y llama la función de forma recursiva lo que deja que haya
        //etiquetas anidadas (Cuando habla el ente)
        return (
          <span key={idNode} style={tagMap[node.tag]}>
            {buildReactElements(node.children)}
          </span>
        );
      });
    }

    return buildReactElements(root);
  }

  return (
    //El whitespace es para que respete los saltos de línea
    <span style={{ whiteSpace: "pre-line" }}>
      {renderStyledText(displayedText)}
    </span>
  );
}

export default TypingText;
