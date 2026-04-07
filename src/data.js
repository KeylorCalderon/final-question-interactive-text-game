export const scenes = {
  1: {
    id: 1,
    text: "Tu nave espacial está abandonada...",
    choices: [
      { text: "Explorar la sala", next: 2 },
      { text: "Hibernar", next: 3 }
    ]
  },
  2: {
    id: 2,
    text: "Encuentras una computadora vieja...",
    choices: [
      { text: "Encenderla", next: 4 },
      { text: "Ignorarla", next: 3 }
    ]
  },
  3: {
    id: 3,
    text: "El procedimiento sale mal. FIN",
    choices: []
  },
  4: {
    id: 4,
    text: "Descubres un mensaje secreto. FIN",
    choices: []
  }
};