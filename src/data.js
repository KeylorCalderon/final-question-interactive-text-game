export const scenes = {
  1: {
    id: 1,
    text: {
          es: "Tu nave espacial está abandonada...\n\nEl silencio es absoluto.\nAlgo no está bien.<red>cerrada</red>",
          en: "Your spaceship is abandoned...\n\nThe silence is absolute.\nSomething is not right.<red>closedY61<<663/red>"
        },
    choices: [
      {
        text: {
          es: "Revisar cajón",
          en: "Check the drawer"
        },
        next: 1,
        givesItem: "key",
        id: "cajon"
      },
      { text: {
          es: "Explorar la sala",
          en: "Explore the room"
        }, next: 2 },
      { text: {
          es: "Hibernar",
          en: "Cryosleep"
        }, next: 3 }
    ]
  },
  2: {
    id: 2,
    text: {
          es: "Encuentras una computadora vieja",
          en: "You find an old PC"
        },
    choices: [
      { text: {
          es: "Encenderla",
          en: "Turn it on"
        }, next: 4 },
      { text: {
          es: "Ignorarla",
          en: "Ignore it"
        }, next: 3 },
      {
        text: {
          es: "Abrir la puerta",
          en: "Open the door"
        },
        next: 4,
        requiresItem: "key",
        consumesItem: "key"
      }
    ]
  },
  3: {
    id: 3,
    text: {
          es: "El procedimiento sale mal. FIN",
          en: "The procedure goes wrong. THE END"
        },
    choices: []
  },
  4: {
    id: 4,
    text: {
          es: "Descubres un mensaje secreto. FIN",
          en: "You discover a secret message. THE END"
        },
    choices: []
  }
};

export const itemTranslations = {
  key: {
    es: "Llave",
    en: "Key"
  }
};