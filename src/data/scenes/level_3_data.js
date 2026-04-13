export const thirdLevelScenes = {
  "001_002_002_001_Nlyl_annihilation": {
    id: "001_002_002_001_Nlyl_annihilation",
    text: {
      es: `Cruzas la puerta roja.

        Te encuentras en la misma cabina, ahora está destruida en pedazos.

        Tu brazalete no muestra ninguna línea, te sientes sin fuerzas.

        Tu vestido ahora muestra una supernova.

        La esfera muestra a la flota de los N-lyl colapsando en el frío espacio.
        Algunas de las naves se parten a la mitad, otras son comprimidas hasta una fracción de su tamaño.

        La imagen cambia al sistema planetario de los N-lyl.
        Su estrella moribunda vuelve a arder, y crece en tamaño... hasta engullir el planeta de los N-lyl.

        Los Jhunuh no saben que ha ocurrido. Unos lo celebran. Otros tienen miedo de ser los siguientes.
        Pero saben que se han librado por esta vez, y que deben de seguir progresando.
        El universo puede ser un lugar hostil. Necesitan estar preparados.

        <i><entity>Tus líneas se han acabado.</entity></i>

        <i><entity>Es momento de la <strong>pregunta final</strong>.</entity></i>

        <i><entity>Dime...</entity></i>

        <i><entity>¿Ha valido la pena sacrificar una civilización, para salvar otra?</entity></i>

        Se materializan dos puertas ante ti.

        Puerta Gris 1: Sí.

        Puerta Gris 2: No.

        `,
      en: `You cross the red door.

        You find yourself in the same cabin, now shattered into pieces.

        Your bracelet shows no lines, you feel without strength.

        Your dress now displays a supernova.

        The sphere shows the N-lyl fleet collapsing in the cold void of space.
        Some of the ships split in half, others are compressed to a fraction of their size.

        The image shifts to the planetary system of the N-lyl.
        Their dying star burns again, and grows in size... until it engulfs the N-lyl planet.

        The Jhunuh do not know what has happened. Some celebrate it. Others fear they may be next.
        But they know they have been spared this time, and that they must keep progressing.
        The universe can be a hostile place. They need to be prepared.

        <i><entity>Your lines have run out.</entity></i>

        <i><entity>It is time for the <strong>final question</strong>.</entity></i>

        <i><entity>Tell me...</entity></i>

        <i><entity>Was it worth sacrificing one civilization to save another?</entity></i>

        Two doors materialize before you.

        Gray Door 1: Yes.

        Gray Door 2: No.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la primera puerta gris",
          en: "Cross the first gray door"
        },
        next: "001_002_002_001_001_be_one_of_them_ending"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_002_002_001_002_why_ending"
      }
    ]
  },

  "001_003_001_001_divine_choice": {
    id: "001_003_001_001_divine_choice",
    text: {
      es: `Cruzas la puerta verde.

        Te encuentras en la misma ciudad de antes, pero ha sido reconstruida.

        Tu brazalete muestra 1 línea, te sientes casi sin fuerzas, se te hace difícil mantenerte en pie.

        El violeta de tu vestido se ha aclarado.

        La esfera muestra una proyección tuya en tiempo real sobre el cielo del planeta amarillo.
        De fondo oyes un discurso en su lengua.

        <i><entity>Ahora ellos saben que existes.</entity></i>
        <i><entity>Saben que extinguiste a miles durante su prehistoria, para que el resto pudiera vivir.</entity></i>
        <i><entity>Saben que paraste la crisis nuclear.</entity></i>
        <i><entity>Saben que eso los llevo a su situación actual.</entity></i>
        <i><entity>Y saben que buscas su supervivencia.</entity></i>

        <i><entity>Ahora que estos miles de millones de ojos pueden verte… <strong>Es momento de la pregunta final</strong></entity></i>

        <i><strong><entity>¿Qué quieres ser para ellos?</entity></strong></i>

        Se materializan tres puertas ante ti.

        Puerta Gris 1: Su protectora.

        Puerta Gris 2: Su juez.

        Puerta Gris 3: Nada.

        `,
      en: `You cross the green door.

        You find yourself in the same city as before, but it has been rebuilt.

        Your bracelet shows 1 line, you feel almost without strength, it is difficult for you to stay on your feet.

        The violet of your dress has lightened.

        The sphere shows a real-time projection of you across the sky of the yellow planet.
        In the background, you hear a speech in their language.

        <i><entity>Now they know that you exist.</entity></i>
        <i><entity>They know that you extinguished thousands during their prehistory, so that the rest could live.</entity></i>
        <i><entity>They know that you stopped the nuclear crisis.</entity></i>
        <i><entity>They know that this led them to their current situation.</entity></i>
        <i><entity>And they know that you seek their survival.</entity></i>

        <i><entity>Now that these billions of eyes can see you… <strong>It is time for the final question</strong></entity></i>

        <i><strong><entity>What do you want to be for them?</entity></strong></i>

        Three doors materialize before you.

        Gray Door 1: Their protector.

        Gray Door 2: Their judge.

        Gray Door 3: Nothing.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la primera puerta gris",
          en: "Cross the first gray door"
        },
        next: "001_003_001_001_001_protector_ending"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_003_001_001_002_judge_ending"
      },
      {
        text: {
          es: "Cruzar la tercera puerta gris",
          en: "Cross the third gray door"
        },
        next: "001_003_001_001_003_nothing_ending"
      }
    ]
  },

  "001_004_002_001_no_responsibility": {
    id: "001_004_002_001_no_responsibility",
    text: {
      es: `Cruzas la primera puerta.

        Ahora te encuentras en un pequeño salón cálido, aunque no logras recordar nada de tu vida anterior, te da la sensación de ser familiar.
        Hay estanterías con libros, algunos sofás, sobre uno de ellos se encuentra lo que parece ser un gran muñeco de madera articulado, con cabeza cilíndrica y una joya verde en el pecho.
        Sobre una mesa hay dos tazas con lo que aparenta ser chocolate caliente.

        <i><entity>Es verdad, no era tu responsabilidad...</entity></i>

        <i><entity>...</entity></i>

        <i><entity>Aún así, que aburrida.</entity></i>

        <i><entity>No te preocupes. Tenemos de sobra "juegos" por jugar</entity></i>
        <i><entity>Me has caído bien, antes de saltar al siguiente, responderé una pregunta</entity></i>

        Ante ti aparecen cinco papeles flotantes con diferentes preguntas escritas.

        <i><entity>Adelante</entity></i>

        Papel 1: ¿Quién soy?

        Papel 2: ¿Qué va a pasarme?

        Papel 3: ¿Quién eres?

        Papel 4: ¿Dónde estamos?

        Papel 5: ¿Qué son los Jhunuh en realidad?

        `,
      en: `You cross the first door.

        Now you find yourself in a small warm room, although you cannot remember anything from your previous life, it gives you a sense of familiarity.
        There are shelves with books, some sofas, on one of them there is what appears to be a large articulated wooden doll, with a cylindrical head and a green gem on its chest.
        On a table there are two cups with what appears to be hot chocolate.

        <i><entity>It is true, it was not your responsibility...</entity></i>

        <i><entity>...</entity></i>

        <i><entity>Even so, how boring.</entity></i>

        <i><entity>Do not worry. We have plenty of "games" to play</entity></i>
        <i><entity>I have taken a liking to you, before moving on to the next one, I will answer one question</entity></i>

        Before you, five floating sheets of paper appear with different questions written on them.

        <i><entity>Go ahead</entity></i>

        Paper 1: Who am I?

        Paper 2: What is going to happen to me?

        Paper 3: Who are you?

        Paper 4: Where are we?

        Paper 5: What are the Jhunuh, really?

        `
    },
    choices: [
      {
        text: {
          es: "Tomar el primer trozo de papel",
          en: "Take the first piece of paper"
        },
        next: "001_004_002_001_001_question_1_ending",
      },
      {
        text: {
          es: "Tomar el segundo trozo de papel",
          en: "Take the second piece of paper"
        },
        next: "001_004_002_001_002_question_2_ending"
      },
      {
        text: {
          es: "Tomar el tercer trozo de papel",
          en: "Take the third piece of paper"
        },
        next: "001_004_002_001_003_question_3_ending"
      },
      {
        text: {
          es: "Tomar el cuarto trozo de papel",
          en: "Take the fourth piece of paper"
        },
        next: "001_004_002_001_004_question_4_ending"
      },
      {
        text: {
          es: "Tomar el quinto trozo de papel",
          en: "Take the fifth piece of paper"
        },
        next: "001_004_002_001_005_question_5_ending"
      }
    ]
  }
};