export const firstLevelScenes = {
  "000_intro_start": {
    id: "000_intro_start",
    text: {
      es: `Despiertas lentamente, sientes como si hubieras dormido por años.
            Te encuentras en un campo que parece extenderse de forma infinita, con un cielo celeste perfecto.
            No hay nubes, solo una tranquilidad inquietante. 
         
            Tratas de gritar, pero ningún sonido sale de tus labios.
            
            Te incorporas, notas que llevas un uniforme militar, pero tu mente está en blanco, lo único que recuerdas es una sala iluminada en tonos rojos dentro de una nave espacial, alarmas sonando y gente corriendo desesperada… hasta que todo se <strong>apagó</strong>.
            
            Notas que, en medio del campo, a unos doscientos metros, flota un cubo absolutamente negro.`,
      en: `You wake up slowly, feeling as if you had been asleep for years.
            You find yourself in a field that seems to stretch endlessly, beneath a perfect blue sky.
            There are no clouds, only an unsettling calm.
            
            You try to scream, but no sound comes out of your lips.
            
            You sit up and notice you're wearing a military uniform, but your mind is blank. The only thing you remember is a room lit in red tones inside a spaceship, alarms blaring and people running in desperation… until everything <strong>went dark</strong>.
            
            You notice that, in the middle of the field, about two hundred meters away, a completely black cube is floating.`
    },
    choices: [
      {
        text: {
          es: "Acércarte al cubo",
          en: "Approach the cube"
        },
        next: "001_beginning_of_Jhunuh"
      }
    ]
  },

  "001_beginning_of_Jhunuh": {
    id: "001_beginning_of_Jhunuh",
    text: {
      es: `Cuando estás al lado del cubo, lo tocas, en ese momento se transforma en una esfera perfecta de oscuridad líquida.
        Dentro de ella se forma una imagen.
        Una nebulosa que colapsa sobre sí misma, dando a luz a una estrella.
        Algunos planetas se condensan a su alrededor en órbitas precisas.
        La esfera hace zoom en uno de ellos, se trata de un mundo árido de superficie amarillenta, que poco a poco se cubre de océanos y selvas exóticas.
        La vida emerge ante tus ojos, formas extrañas y aparentemente imposibles evolucionan a toda velocidad.
        
        Hasta que aparecen <i>ellos</i>.
        
        Seres cuadrúpedos de piel blanco-verdosa, sin pelo, con una cola larga y flexible que usan como extremidad, tienen tres ojos negros y dos orejas formadas por círculos concéntricos.
        Comienzan a inventar herramientas rudimentarias y a cultivar la tierra, se llaman a sí mismos, los <strong>Jhunuh</strong>.
        Sus cantos y risas suenan como campanillas de cristal, hasta que se ven interrumpidas por una gran sequía. Su tierra se agrieta y comienzan a pasar hambruna, mientras guían sus tres ojos al cielo suplicando por ayuda.

        De pronto, una presencia resuena en tu cabeza.

        <i><entity>Aunque el universo ya haya olvidado que los tuyos existieron… al final, toda civilización llega aquí. No eres dios, ni juez, solamente un observador obligado a decidir...</entity></i>

        Tu uniforme militar se disuelve y en su lugar aparece un vestido blanco junto a unas sandalias.
        En tu muñeca izquierda aparece un artefacto cristalino, un brazalete con diez líneas grabadas en él.
        
        <i><entity>Cada puerta es una posibilidad. Cada elección, un veredicto... Pero <strong>tú</strong> deberás pagar su precio.</entity></i>
        
        Frente a ti, se materializan cuatro puertas, cada una de un color distinto con un texto grabado en tu lengua natal, y la cantidad de líneas a pagar por atravesarlas.

        <blue>Puerta Azul</blue>: Enviar lluvia y eras de fertilidad a los Jhunuh.
        Precio: 10 líneas.
        
        <green>Puerta Verde</green>: Enseñar técnicas básicas de riego.
        Precio: 6 líneas.
        
        <red>Puerta Roja</red>: Matar a los miembros más débiles para que el resto pueda sobrevivir.
        Precio: 2 líneas.
        
        Puerta Gris: Ignorar por completo.
        Ganancia: 2 líneas.
        
        El peso de millones de diminutas vidas ahora descansa sobre tus hombros.

        Pero...
        
        ¿Quién eres tú para decidir el destino de toda una especie?

        Y sobre todo…

        ¿Cuánto podrías pagar por esa decisión?`,
      en: `When you stand beside the cube, you touch it. At that moment, it transforms into a perfect sphere of liquid darkness.
        Inside it, an image begins to form.
        A nebula collapses in on itself, giving birth to a star.
        Several planets condense around it in precise orbits.
        The sphere zooms in on one of them, a barren world with a yellowish surface that gradually becomes covered in oceans and exotic jungles.
        Life emerges before your eyes, strange and seemingly impossible forms evolve at incredible speed.
        
        Until <i>they</i> appear.
        
        Quadrupedal beings with pale greenish-white skin, hairless, with a long, flexible tail they use as a limb. They have three black eyes and two ears formed by concentric circles.
        They begin to invent rudimentary tools and cultivate the land. They call themselves the <strong>Jhunuh</strong>.
        Their songs and laughter sound like crystal chimes, until they are interrupted by a great drought. Their land cracks, and they begin to suffer from famine, raising their three eyes to the sky as they plead for help.
        
        Suddenly, a presence echoes in your mind.
        
        <i><entity>Even if the universe has already forgotten that your kind ever existed... in the end, every civilization arrives here. You are neither a god nor a judge, only an observer forced to decide...</entity></i>

        Your military uniform dissolves, and in its place appears a white dress along with a pair of sandals.
        On your left wrist, a crystalline artifact appears, a bracelet with ten lines engraved upon it.
        
        <i><entity>Each door is a possibility. Each choice, a verdict... But <strong>you</strong> will have to pay its price.</entity></i>
        
        In front of you, four doors materialize, each a different color, with text engraved in your native language, along with the number of lines required to pass through them.

        <blue>Blue Door</blue>: Send rain and ages of fertility to the Jhunuh.
        Cost: 10 lines.
        
        <green>Green Door</green>: Teach basic irrigation techniques.
        Cost: 6 lines.
        
        <red>Red Door</red>: Kill the weakest members so the rest may survive.
        Cost: 2 lines.
        
        Gray Door: Ignore them completely.
        Gain: 2 lines.
        
        The weight of millions of tiny lives now rests upon your shoulders.

        But...

        Who are you to decide the fate of an entire species?

        And above all…
        
        How much would you be willing to pay for that decision?`
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta azul",
          en: "Cross the blue door"
        },
        next: "001_001_blue_choice",
        requiresLines: 10
      },
      {
        text: {
          es: "Cruzar la puerta verde",
          en: "Cross the green door"
        },
        next: "001_002_green_choice",
        requiresLines: 6
      },
      {
        text: {
          es: "Cruzar la puerta roja",
          en: "Cross the red door"
        },
        next: "001_003_red_choice",
        requiresLines: 2
      },
      {
        text: {
          es: "Cruzar la puerta gris",
          en: "Cross the gray door"
        },
        next: "001_004_gray_choice",
        givesLines: 2
      }
    ]
  },

  "001_001_blue_choice": {
    id: "001_001_blue_choice",
    text: {
      es: `Cruzas la puerta azul.
      
        Todo se vuelve de noche, y el campo es iluminado por las estrellas.
        
        Tu brazalete no muestra ninguna línea, te sientes sin fuerzas.
        Notas que tu vestido está sucio y rasgado, y tu cuerpo débil y delgado, te desplomas en el suelo.
        
        La esfera comienza a mostrar imágenes de los Jhunuh regocijándose bajo la lluvia.
        Las plegarias de sus tres ojos al cielo fueron escuchadas. Sus cultivos prosperan, y su pequeña sociedad se salva...
        Pero la abundancia es tal, que la agricultura pierde sentido, en un par de generaciones la abandonan para regresar a la recolección.
        Sin ningún desafío por superar, su civilización no evoluciona, es pacífica, pero estancada en un estado primitivo.
        El potencial que una vez tuvieron de expandirse y prosperar... ha desaparecido.
        
        <i><entity>Diste todo por ellos... y no son capaces siquiera de concebir la idea de tu existencia, menos la suya propia</entity></i>
        
        La esfera muestra como la tranquila y rudimentaria civilización de los Juhnuh desaparece, un instante en el tiempo borra todo rastro de su existencia, convirtiéndose en solo una de las muchas formas de vida en la historia de ese planeta amarillo.

        <i><entity>Te sacrificaste, dando abundancia... Sin embargo, no supieron aprovechar tu regalo... Fuiste su dios... E incluso los dioses deben responder</entity></i>
        <i><entity>No quedan más líneas... Es momento de la <strong>pregunta final</strong></entity></i>
        
        <i><strong><entity>Si al salvarlos les arrebataste todo su potencial, condenándoles al olvido, ¿tu sacrificio tuvo valor?</entity></strong></i>
        
        Se materializan dos puertas ante ti.
        
        Puerta Gris 1: Sí.
        
        Puerta Gris 2: No.
        
        `,
      en: `You step through the blue door.
      
        Everything turns to night, and the field is illuminated by the stars.
        
        Your bracelet shows no lines; you feel completely drained.
        You notice your dress is dirty and torn, and your body weak and thin, you collapse onto the ground.
        
        The sphere begins to display images of the Jhunuh rejoicing under the rain.
        The prayers of their three eyes to the sky have been answered. Their crops flourish, and their small society is saved...
        But the abundance is so great that agriculture loses its meaning, within a few generations, they abandon it and return to gathering.
        With no challenges left to overcome, their civilization does not evolve, it is peaceful, but stagnant in a primitive state.
        The potential they once had to expand and thrive... has vanished.
        
        <i><entity>You gave everything for them... and they are not even capable of conceiving the idea of your existence, let alone their own.</entity></i>
        
        The sphere shows how the tranquil and rudimentary civilization of the Jhunuh disappears, a single instant in time erases all trace of their existence, turning them into just one of the many life forms in the history of that yellow planet.

        <i><entity>You sacrificed yourself, giving them abundance... Yet they did not know how to make use of your gift... You were their god... And even gods must answer.</entity></i>
        <i><entity>There are no lines left... It is time for the <strong>final question</strong>.</entity></i>
        
        <i><strong><entity>If by saving them you took away all their potential, condemning them to oblivion, did your sacrifice have value?</entity></strong></i>

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
        next: "001_001_001_move_on_ending"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_001_002_worthless_ending"
      }
    ]
  },

  "001_002_green_choice": {
    id: "001_002_green_choice",
    text: {
      es: `Cruzas la puerta verde.
      
        De forma físicamente imposible, ahora te encuentras en un pasillo inmenso, sus paredes están llenas de tuberías gruesas.
        En el centro exacto del pasillo flota de nuevo la esfera negra.
        
        Tu brazalete muestra 4 líneas, te encuentras cansada y adolorida.
        Notas que tu vestido y tus manos están cubiertos de suciedad.
        
        La esfera muestra imágenes de los Jhunuh recibiendo instrucciones divinas sobre técnicas de riego.
        Aún sin conocerte, comienzan a adorarte como un dios.
        Superan la sequía, rápidamente se expanden por su planeta, inventan la metalurgia, levantan ciudades, llegan a la era industrial... y finalmente a la era de la información.
        Su acelerado ritmo de vida consume tantos recursos, que su hermoso planeta amarillo está al borde del colapso ecológico.
        Numerosas especies se extinguen con rapidez, la calidad del aire alcanza niveles críticos, y algunos Jhunuh comienzan a morir.
        Unos pocos creyentes de la fe más antigua elevan sus plegarias, pidiendo intervención divina.
        
        <i><entity>Te has involucrado en su historia... ya no hay marcha atrás...</entity></i>
        
        Ante ti, se materializan dos puertas.
        
        <green>Puerta Verde</green>: Enseñar una fuente de energía limpia de alta eficiencia.
        Precio: 3 líneas.
        
        Puerta Gris: Ignorar.
        Ganancia: 3 líneas.
        
        `,
      en: `You step through the green door.
      
        In a physically impossible way, you now find yourself in an immense corridor, its walls lined with thick pipes.
        At the exact center of the corridor, the black sphere floats once again.
        
        Your bracelet shows 4 lines, you feel tired and in pain.
        You notice that your dress and your hands are covered in dirt.\
        
        The sphere shows images of the Jhunuh receiving divine instructions on irrigation techniques.
        Without even knowing you, they begin to worship you as a god.
        They overcome the drought, rapidly expand across their planet, invent metallurgy, build cities, reach the industrial age... and finally the information age.
        Their accelerated pace of life consumes so many resources that their beautiful yellow planet stands on the brink of ecological collapse.
        Numerous species go extinct rapidly, air quality reaches critical levels, and some Jhunuh begin to die.
        A few followers of the oldest faith raise their prayers, asking for divine intervention.\
        
        <i><entity>You have become involved in their history... there is no turning back now...</entity></i>
        
        Before you, two doors materialize.
        
        <green>Green Door</green>: Teach a highly efficient clean energy source.
        Cost: 3 lines.
        
        Gray Door: Ignore.
        Gain: 3 lines.
        
        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta verde",
          en: "Cross the green door"
        },
        next: "001_002_001_understand_or_survive",
        requiresLines: 3
      },
      {
        text: {
          es: "Cruzar la puerta gris",
          en: "Cross the gray door"
        },
        next: "001_002_002_Nlyl_invasion",
        givesLines: 3
      }
    ]
  },

  "001_003_red_choice": {
    id: "001_003_red_choice",
    text: {
      es: `Cruzas la puerta roja.

        De forma físicamente imposible, ahora te encuentras en un pasillo inmenso, sus paredes están llenas de tuberías gruesas.
        En el centro exacto del pasillo flota de nuevo la esfera negra.
        
        Tu brazalete muestra 8 líneas, estás levemente agotada.
        
        Notas que tu vestido y tus manos están cubiertos de un líquido morado claro, espeso y tibio.
        Es sangre.
        Sangre de todos los que condenaste.
        
        La esfera muestra imágenes de Jhunuh falleciendo repentinamente, al inicio solo los viejos y enfermos, después los demás.
        Sientes el dolor y la confusión colectiva de su sociedad ante lo que acaba de ocurrir. Su población se redujo a menos del 30%.
        Y aún así, en medio del dolor...
        Los que quedan se levantan, superan la sequía, poco a poco se expanden por su planeta, inventan la metalurgia, levantan ciudades, llegan a la era industrial... y descubren el átomo.
        Dos grandes regiones se miran con odio y miedo mientras se apuntan con misiles nucleares, el reloj nuclear está marcando los últimos segundos.
        La esfera se detiene mostrando a los dos líderes Jhunuh de cada bando.
        
        <i><entity>Te has involucrado en su historia... ya no hay marcha atrás...</entity></i>
        
        Ante ti, se materializan dos puertas.
        
        <blue>Puerta Azul</blue>: Desarmar la infraestructura de los misiles.
        Precio: 5 líneas.
        
        <red>Puerta Roja</red>: Destruir los gobiernos, ejércitos y regiones involucradas.
        Precio: 1 línea.
        
        `,
      en: `You step through the red door.
      
        In a physically impossible way, you now find yourself in an immense corridor, its walls lined with thick pipes.
        At the exact center of the corridor, the black sphere floats once again.
        
        Your bracelet shows 8 lines; you feel slightly exhausted.
        
        You notice that your dress and your hands are covered in a light purple liquid, thick and warm.
        It is blood.
        The blood of all those you condemned.
        
        The sphere shows images of Jhunuh suddenly dying, at first only the old and the sick, then the rest.
        You feel the pain and collective confusion of their society at what has just occurred. Their population has been reduced to less than 30%.
        And even so, in the midst of the pain...
        Those who remain rise up, overcome the drought, gradually expand across their planet, invent metallurgy, build cities, reach the industrial age... and discover the atom.
        Two great regions glare at each other with hatred and fear as they aim nuclear missiles, the nuclear clock is ticking down its final seconds.
        The sphere pauses, showing the two Jhunuh leaders of each side.
        
        <i><entity>You have become involved in their history... there is no turning back now...</entity></i>
        
        Before you, two doors materialize.
        
        <blue>Blue Door</blue>: Dismantle the missile infrastructure.
        Cost: 5 lines.
        
        <red>Red Door</red>: Destroy the governments, armies, and regions involved.
        Cost: 1 line.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta azul",
          en: "Cross the blue door"
        },
        next: "001_003_001_waiting_another_miracle",
        requiresLines: 5
      },
      {
        text: {
          es: "Cruzar la puerta roja",
          en: "Cross the red door"
        },
        next: "001_003_002_judgement",
        requiresLines: 1
      }
    ]
  },

  "001_004_gray_choice": {
    id: "001_004_gray_choice",
    text: {
      es: `Cruzas la puerta gris.
      
        De forma físicamente imposible, ahora te encuentras en un pasillo inmenso, sus paredes están llenas de pantallas luminosas.
        En el centro exacto del pasillo flota de nuevo la esfera negra.
        
        Tu brazalete muestra 12 líneas, tu cuerpo se siente ligero y lleno de vida, nunca has estado mejor.
        
        Tu vestido se ha tornado de un color grisáceo.
        
        La esfera muestra imágenes de Jhunuh luchando entre sí por el poco alimento disponible.
        Muchos fallecen debido a la hambruna, viejos, jóvenes y crías indefensas, su población se reduce a poco más del 60%.
        Los que sobreviven no tienen un destino fácil, pero poco a poco se levantan y su civilización prospera.
        Les toma bastante tiempo expandirse por su planeta, pero lo consiguen. Inventan la metalurgia, levantan ciudades, llegan a la era industrial, la era de la información, y finalmente la curiosidad por el espacio exterior.
        Comienzan a observar las estrellas, a crear telescopios cada vez más poderosos.
        Hasta que, detectan un gran asteroide de camino a su planeta, que arrasará con todo al impactar.
        El pánico se desata a nivel global, y la sociedad colapsa ante un final inminente.
        
        <i><entity>Todavía no te has involucrado en su historia... pero aún puedes elegir...</entity></i>
        
        Ante ti, se materializan dos puertas.
        
        <blue>Puerta Azul</blue>: Desviar el asteroide.
        Precio: 12 líneas.
        
        Puerta Gris: Ignorar por completo.
        Ganancia: 8 líneas.

        `,
      en: `You step through the gray door.
      
        In a physically impossible way, you now find yourself in an immense corridor, its walls lined with glowing screens.
        At the exact center of the corridor, the black sphere floats once again.

        Your bracelet shows 12 lines, your body feels light and full of life, you have never felt better.

        Your dress has taken on a grayish color.

        The sphere shows images of Jhunuh fighting among themselves for the little food available.
        Many die due to famine, old, young, and helpless offspring, their population is reduced to just over 60%.
        Those who survive do not have an easy fate, but little by little they rise, and their civilization prospers.
        It takes them quite some time to expand across their planet, but they succeed. They invent metallurgy, build cities, reach the industrial age, the information age, and finally develop a curiosity for outer space.
        They begin to observe the stars, creating increasingly powerful telescopes.
        Until they detect a large asteroid heading toward their planet, one that will wipe out everything upon impact.
        Panic spreads globally, and society collapses in the face of an imminent end.
        
        <i><entity>You have not yet become involved in their history... but you can still choose...</entity></i>
        
        Before you, two doors materialize.
        
        <blue>Blue Door</blue>: Divert the asteroid.
        Cost: 12 lines.
        
        Gray Door: Ignore completely.
        Gain: 8 lines.
        
        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta azul",
          en: "Cross the blue door"
        },
        next: "001_004_001_Atlas_ending",
        requiresLines: 12
      },
      {
        text: {
          es: "Cruzar la puerta gris",
          en: "Cross the gray door"
        },
        next: "001_004_002_path_of_indifference",
        givesLines: 8
      }
    ]
  }
};