export const secondLevelScenes = {
  "001_002_001_understand_or_survive": {
    id: "001_002_001_understand_or_survive",
    text: {
      es: `Cruzas la puerta verde.

        Te encuentras ahora en una central energética decorada con numerosos artefactos religiosos.

        Tu brazalete muestra 1 línea, te sientes casi sin fuerzas, se te hace difícil mantenerte en pie.

        Tu vestido ahora roto, está cubierto por más suciedad, y tus manos llenas de ampollas.

        Cerca de la esfera ves algo diminuto, te agachas a tomarlo.
        Es una especie de caparazón con forma de gota, de tamaño similar a un huevo, con dos pies, dos brazos y dos antenas.
        Lleva una diminuta ropa, blanca y cubierta por suciedad como la tuya.

        La esfera se enciende, mostrando a los Jhunuh recibiendo instrucciones divinas.
        Logran conseguir energía "infinita". Sus necesidades se sacian, el planeta amarillo deja de asfixiarse y poco a poco se recupera.
        Los Jhunuh no llaman a esto tecnología. Lo llaman <strong>milagro</strong>.
        La adoración hacia ti se aviva. Las centrales energéticas se convierten en templos santos.
        Los planos en escrituras sagradas.
        Se forman órdenes de ingenieros-sacerdotes.
        Las primeras generaciones todavía estudian sus diseños…
        Las siguientes los veneran…
        Las últimas los obedecen sin comprenderlos.
        Cuando una falla ocurre, nadie sabe cómo repararla.
        Cuando una mejora es posible, nadie se atreve a intentarla.
        El progreso de la civilización Jhunuh se detiene… pero la dependencia no.
        Después de siglos, el sistema comienza a morir.
        Nadie sabe cómo detenerlo.
        Los fieles rezan.
        Los herejes intentan aprender… pero es demasiado tarde.
        Eventualmente, todos miran al cielo, esperando un nuevo <strong>milagro</strong>.
        Te esperan a ti.

        <i><entity>Pero con las líneas que te quedan. No hay mucho que su "dios" pueda lograr. ¿No es así?</entity></i>

        <i><entity>Les enseñaste, y aún así, desaprovecharon la oportunidad que les diste.</entity></i>
        <i><entity>Pensaron que siempre estarías allí para instruirlos.</entity></i>

        <i><entity>...</entity></i>
        <i><entity>Incluso los dioses deben responder</entity></i>
        <i><entity>Es momento de la <strong>pregunta final</strong></entity></i>

        <i><entity>Después de todo…</entity></i>
        <i><entity>¿Deben sobrevivir… aunque nunca comprendan… o comprender… aunque no todos sobrevivan?</entity></i>

        Se materializan dos puertas ante ti.

        Puerta Gris 1: Deben sobrevivir.

        Puerta Gris 2: Deben comprender.

        `,
      en: `You cross the green door.

        You now find yourself in an energy plant decorated with numerous religious artifacts.

        Your bracelet shows 1 line, you feel almost without strength, it is difficult for you to stay on your feet.

        Your dress, now torn, is covered with more dirt, and your hands are full of blisters.

        Near the sphere you see something tiny, you crouch down to pick it up.
        It is a kind of shell shaped like a droplet, similar in size to an egg, with two feet, two arms, and two antennae.
        It wears tiny clothing, white and covered in dirt like yours.

        The sphere lights up, showing the Jhunuh receiving divine instructions.
        They manage to obtain "infinite" energy. Their needs are satisfied, the yellow planet stops suffocating and little by little recovers.
        The Jhunuh do not call this technology. They call it a <strong>miracle</strong>.
        The worship toward you intensifies. Energy plants become holy temples.
        The blueprints become sacred scriptures.
        Orders of engineer-priests are formed.
        The first generations still study their designs…
        The next ones venerate them…
        The last ones obey them without understanding them.
        When a failure occurs, no one knows how to repair it.
        When an improvement is possible, no one dares to attempt it.
        The progress of the Jhunuh civilization stops… but the dependency does not.
        After centuries, the system begins to die.
        No one knows how to stop it.
        The faithful pray.
        The heretics try to learn… but it is too late.
        Eventually, everyone looks to the sky, waiting for a new <strong>miracle</strong>.
        They are waiting for you.

        <i><entity>But with the lines you have left. There is not much your "god" can achieve. Is that not so?</entity></i>

        <i><entity>You taught them, and even so, they wasted the opportunity you gave them.</entity></i>
        <i><entity>They thought you would always be there to instruct them.</entity></i>

        <i><entity>...</entity></i>
        <i><entity>Even gods must answer</entity></i>
        <i><entity>It is time for the <strong>final question</strong></entity></i>

        <i><entity>After all…</entity></i>
        <i><entity>Should they survive… even if they never understand… or understand… even if not all survive?</entity></i>

        Two doors materialize before you.

        Gray Door 1: They must survive.

        Gray Door 2: They must understand.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la primera puerta gris",
          en: "Cross the first gray door"
        },
        next: "001_002_001_001_survive_ending"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_002_001_002_understand_ending"
      }
    ]
  },

  "001_002_002_Nlyl_invasion": {
    id: "001_002_002_Nlyl_invasion",
    text: {
      es: `Cruzas la puerta gris.

        Te encuentras ahora en una cabina, no hay gravedad, y afuera logras ver el oscuro vacío del espacio.

        Tu brazalete muestra 7 líneas, el dolor se ha ido, aunque el cansancio no.

        Tu vestido ahora parece un portal viviente, su superficie deja ver numerosas estrellas como si fuera una ventana al cosmos.

        Dentro de la cabina flota un esqueleto cartilaginoso, mide poco más de 1 metro y lleva ropa con efecto igual a la tuya.

        La esfera se enciende, las plegarias de los Jhunuh no fueron escuchadas.
        Ellos siguen adelante sin intervención, sus fábricas no se detienen, la temperatura global aumenta y sus océanos comienzan a secarse.
        Ciudades enteras colapsan. Naciones caen. Muchos pierden la vida en el proceso.
        Pero no desaparecen... y algo inesperado ocurre.
        Entre el caos, nace también la cooperación.
        Pequeños grupos sobreviven y construyen un equilibrio, aprenden a reutilizar, reducir y escuchar a su planeta.
        Así, luego de generaciones los Jhunuh vuelven a prosperar.
        El planeta amarillo deja de ser suficiente, y se expanden por su sistema solar.
        Comienzan a pensar que quizás no sean los únicos en su universo.
        Tal vez haya más formas de vida inteligentes allá afuera.
        Con la esperanza de encontrar compañeros en el desolador cosmos, envían mensajes al universo.

        <strong>Y son escuchados.</strong>

        Sus mensajes son recibidos por los N-lyl, una especie de su vecindario solar.
        Estos responden, y durante un par de décadas se da un intercambio entre ambas civilizaciones.

        Los N-lyl aprenden que el sistema de los Jhunuh rebosa vida.
        Ellos en cambio, orbitan una estrella moribunda. Perecerán pronto si no buscan un nuevo hogar.
        Por suerte, su avanzada tecnología les permitirá abandonar su sistema planetario en busca de la supervivencia.

        <strong>Y el destino que han elegido es el sistema de los Jhunuh.</strong>

        Conscientes de su superioridad tecnológica, los N-lyl envían un último mensaje.

        <i>Tomaremos su sistema, es inútil que intenten luchar</i>

        El mensaje desconcierta a los Jhunuh, envían numerosas respuestas... pero no reciben ningún mensaje de vuelta.
        En poco tiempo ya es posible observar la flota de los N-lyl acercarse.
        El pánico se apodera de la civilización momentáneamente.
        Los N-lyl llegarán al sistema en solo un par de generaciones.
        Los Jhunuh intentan acelerar su progreso, pero saben que muy probablemente, sea en vano.

        Ante ti, se materializan dos puertas.

        <red>Puerta Roja: Destruir la civilización de los N-lyl.</red>
        Precio: 7 líneas.

        <green>Puerta Verde</green>: Retrasar la flota de los N-lyl.
        Precio: 4 líneas.

        `,
      en: `You cross the gray door.

        You now find yourself in a cabin, there is no gravity, and outside you can see the dark void of space.

        Your bracelet shows 7 lines, the pain is gone, although the exhaustion is not.

        Your dress now seems like a living portal, its surface reveals numerous stars as if it were a window into the cosmos.

        Inside the cabin floats a cartilaginous skeleton, it measures a little over 1 meter and wears clothing with an effect similar to yours.

        The sphere lights up, the prayers of the Jhunuh were not heard.
        They continue forward without intervention, their factories do not stop, the global temperature rises and their oceans begin to dry up.
        Entire cities collapse. Nations fall. Many lose their lives in the process.
        But they do not disappear... and something unexpected happens.
        Amid the chaos, cooperation is also born.
        Small groups survive and build a balance, they learn to reuse, reduce, and listen to their planet.
        Thus, after generations the Jhunuh prosper again.
        The yellow planet stops being enough, and they expand across their solar system.
        They begin to think that perhaps they are not the only ones in their universe.
        Perhaps there are more intelligent life forms out there.
        With the hope of finding companions in the desolate cosmos, they send messages into the universe.

        <strong>And they are heard.</strong>

        Their messages are received by the N-lyl, a species from their solar neighborhood.
        They respond, and for a couple of decades there is an exchange between both civilizations.

        The N-lyl learn that the Jhunuh system teems with life.
        They, on the other hand, orbit a dying star. They will perish soon if they do not seek a new home.
        Fortunately, their advanced technology will allow them to leave their planetary system in search of survival.

        <strong>And the destination they have chosen is the Jhunuh system.</strong>

        Aware of their technological superiority, the N-lyl send one final message.

        <i>We will take your system, it is useless for you to try to fight</i>

        The message confuses the Jhunuh, they send numerous replies... but they do not receive any message in return.
        In a short time, it is already possible to observe the N-lyl fleet approaching.
        Panic takes hold of the civilization momentarily.
        The N-lyl will arrive in the system in only a couple of generations.
        The Jhunuh try to accelerate their progress, but they know that it will most likely be in vain.

        Before you, two doors materialize.

        <red>Red Door: Destroy the civilization of the N-lyl.</red>
        Price: 7 lines.

        <green>Green Door</green>: Delay the N-lyl fleet.
        Price: 4 lines.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta roja",
          en: "Cross the red door"
        },
        next: "001_002_002_001_Nlyl_annihilation",
        requiresLines: 7
      },
      {
        text: {
          es: "Cruzar la puerta verde",
          en: "Cross the green door"
        },
        next: "001_002_002_002_seeds_to_space_ending",
        requiresLines: 4
      }
    ]
  },

  "001_003_001_waiting_another_miracle": {
    id: "001_003_001_waiting_another_miracle",
    text: {
      es: `Cruzas la puerta azul.

        Te encuentras ahora en una ciudad destruida, llena de polvo.

        Tu brazalete muestra 3 líneas, te sientes débil, tus fuerzas escasean.

        Las manchas de sangre en tu vestido se han secado, dándole un aspecto violeta.

        Cerca de la esfera, ves algo que te recuerda a un esqueleto, con una forma vagamente semejante a la de un dinosaurio, 6 extremidades, de unos 5 metros de largo, y algunas prendas violetas similares a las tuyas.

        La esfera muestra como los sistemas fallan simultáneamente, los silos no se abren, y los materiales se degradan rápidamente.
        El ataque nunca ocurre.
        Nadie sabe quién fue el responsable, pero lo atribuyen a intervención divina.
        Algunos comienzan a adorarte, aún sin saber quien eres.

        Pero no hay paz, la tensión crece.
        Décadas después llegan nuevas armas y formas de destrucción.
        Su mundo vuelve a estar a minutos de la destrucción mundial.
        Muchos levantan oraciones pidiendo otra intervención.

        Retrasaste el evento, pero no eliminaste.

        <i><entity>Te quedan pocas líneas.</entity></i>
        <i><entity>Tus opciones se limitan.</entity></i>

        Ante ti, se materializan dos puertas.

        <blue>Puerta Azul</blue>: Imponer paz.
        Precio: 7 líneas.

        <green>Puerta Verde</green>: Revelar tu existencia.
        Precio: 2 líneas.

        `,
      en: `You cross the blue door.

        You now find yourself in a destroyed city, filled with dust.

        Your bracelet shows 3 lines, you feel weak, your strength is scarce.

        The blood stains on your dress have dried, giving it a violet appearance.

        Near the sphere, you see something that reminds you of a skeleton, with a shape vaguely similar to that of a dinosaur, 6 limbs, about 5 meters long, and some violet garments similar to yours.

        The sphere shows how the systems fail simultaneously, the silos do not open, and the materials degrade rapidly.
        The attack never occurs.
        No one knows who was responsible, but they attribute it to divine intervention.
        Some begin to worship you, even without knowing who you are.

        But there is no peace, the tension grows.
        Decades later, new weapons and forms of destruction arrive.
        Their world is once again minutes away from global destruction.
        Many raise prayers asking for another intervention.

        You delayed the event, but you did not eliminate it.

        <i><entity>You have few lines left.</entity></i>
        <i><entity>Your options are limited.</entity></i>

        Before you, two doors materialize.

        <blue>Blue Door</blue>: Impose peace.
        Price: 7 lines.

        <green>Green Door</green>: Reveal your existence.
        Price: 2 lines.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la puerta azul",
          en: "Cross the blue door"
        },
        next: "000_impossible_ending",
        requiresLines: 7
      },
      {
        text: {
          es: "Cruzar la puerta verde",
          en: "Cross the green door"
        },
        next: "001_003_001_001_divine_choice",
        requiresLines: 2
      }
    ]
  },

  "001_003_002_judgement": {
    id: "001_003_002_judgement",
    text: {
      es: `Cruzas la puerta roja.

        Te encuentras ahora en una ciudad en llamas.

        Tu brazalete muestra 7 líneas, sientes tus hombros más pesados.

        Tu vestido tiene una mayor cantidad de sangre. Al igual que tus manos.
        Tratas de limpiarte sobre él, pero la cantidad es demasiada.

        Cerca de la esfera, ves un esqueleto, porta una camisa y pantalón que debieron ser blancos, pero ahora tienen muchas manchas violetas.

        La esfera muestra numerosas explosiones. Gobiernos, ejércitos y regiones enteras han sido aniquiladas.
        Los misiles no son lanzados... porque no queda nadie para hacerlo.
        El terror se apodera de los Jhunuh.
        Muchas acusan de lo ocurrido a una entidad divina castigándolos por su actuar.
        Su mundo entra en una nueva edad oscura, los que quedan reconstruyen la sociedad.
        Pero algo se perdió en el proceso, así que el progreso se ralentiza.
        Generaciones después los Jhunuh siguen vivos.
        Pero nunca vuelven a acercarse al átomo.
        No por ética...
        Por terror.

        <i><entity>Has decidido actuar como un juez sobre los Jhunuh...</entity></i>
        <i><entity>Pero incluso los jueces deben ser <strong>juzgados</strong>.</entity></i>

        <i><entity>Es momento de la <strong>pregunta final</strong></entity></i>

        <i><entity>¿Quién deseas que te juzgue?</entity></i>

        Se materializan tres puertas ante ti.

        Puerta Gris 1: Los Jhunuh.

        Puerta Gris 2: Yo.

        Puerta Gris 3: Tú.

        `,
      en: `You cross the red door.

        You now find yourself in a city in flames.

        Your bracelet shows 7 lines, you feel your shoulders heavier.

        Your dress has a greater amount of blood. As do your hands.
        You try to clean yourself on it, but the amount is too much.

        Near the sphere, you see a skeleton, it wears a shirt and pants that must have been white, but now they have many violet stains.

        The sphere shows numerous explosions. Governments, armies, and entire regions have been annihilated.
        The missiles are not launched... because there is no one left to do so.
        Terror takes hold of the Jhunuh.
        Many accuse a divine entity of what happened, punishing them for their actions.
        Their world enters a new dark age, those who remain rebuild society.
        But something was lost in the process, so progress slows down.
        Generations later, the Jhunuh are still alive.
        But they never come close to the atom again.
        Not because of ethics...
        Because of terror.

        <i><entity>You have chosen to act as a judge over the Jhunuh...</entity></i>
        <i><entity>But even judges must be <strong>judged</strong>.</entity></i>

        <i><entity>It is time for the <strong>final question</strong></entity></i>

        <i><entity>Who do you wish to judge you?</entity></i>

        Three doors materialize before you.

        Gray Door 1: The Jhunuh.

        Gray Door 2: Me.

        Gray Door 3: You.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la primera puerta gris",
          en: "Cross the first gray door"
        },
        next: "001_003_002_001_Jhunuh_judgement"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_003_002_002_self_judgment"
      },
      {
        text: {
          es: "Cruzar la tercera puerta gris",
          en: "Cross the third gray door"
        },
        next: "001_003_002_003_entity_judgment"
      }
    ]
  },

  "001_004_002_path_of_indifference": {
    id: "001_004_002_path_of_indifference",
    text: {
      es: `Cruzas la puerta gris.

        Te encuentras ahora en un pasillo estrecho, sus paredes tienen pequeñas ventanas desde la cual se ve el desolador espacio exterior.

        Tu brazalete muestra 20 líneas, te sientes con tanta vitalidad que la muerte parece solamente un mito.

        Tu vestido se ha tornado de un color oscuro.

        La esfera muestra el asteroide impactando contra el planeta amarillo.
        Al tocar la superficie libera la energía de un millón de bombas nucleares formando un cráter gigantesco.
        Todo en cientos de kilómetros se vaporiza en segundos, se producen terremotos globales.
        Al cabo de 10 minutos fragmentos incandescentes caen por todo el planeta, ocasionando enormes incendios.
        En los días venideros la superficie cayó en oscuridad, y en cuestión de meses la caída drástica de la temperatura acaba con la mayoría de especies del planeta amarillo... incluyendo a los Jhunuh.

        Solamente queda una semilla de esperanza, 8 naves despegaron antes de la inminente destrucción, rumbo al planeta más cercano.
        Hubo conflictos por decidir quienes irían en ellas, pero en el fondo, todos sabían que era en vano.
        Incluso si llegaran a lograr el fin de su viaje, no disponían de la tecnología necesaria para sobrevivir en ese planeta.
        Solo era un intento desesperado de enviar una semilla al cosmos... que jamás lograría germinar.

        <i><entity>Te negaste a participar en el desarrollo de su civilización, y ahora enfrentan una muerte inevitable.</entity></i>
        <i><entity>¿Podría decirse que es realmente tu culpa?</entity></i>
        <i><entity>Dejaste que el destino siguiera su curso, cobrando miles de millones de vidas, junto a siglos de historia y progreso.</entity></i>
        <i><entity>¿Es responsabilidad tuya la situación que les ha ocurrido?</entity></i>
        <i><entity>De todas formas, tu inacción no te excenta de la <strong>pregunta final</strong></entity></i>

        <i><strong><entity>¿Por qué no los ayudaste?</entity></strong></i>

        Se materializan tres puertas ante ti.

        Puerta Gris 1: Porque no era mi responsabilidad.

        Puerta Gris 2: Porque tuve miedo de intervenir.

        Puerta Gris 3: Porque no me importaban.

        `,
      en: `You cross the gray door.

        You now find yourself in a narrow corridor, its walls have small windows from which the desolate outer space can be seen.

        Your bracelet shows 20 lines, you feel so much vitality that death seems like nothing more than a myth.

        Your dress has turned a dark color.

        The sphere shows the asteroid impacting the yellow planet.
        Upon touching the surface, it releases the energy of a million nuclear bombs, forming a gigantic crater.
        Everything within hundreds of kilometers is vaporized in seconds, global earthquakes occur.
        After 10 minutes, incandescent fragments fall across the entire planet, causing enormous fires.
        In the days that follow, the surface fell into darkness, and within months the drastic drop in temperature wipes out most species on the yellow planet... including the Jhunuh.

        Only a seed of hope remains, 8 ships departed before the imminent destruction, heading toward the nearest planet.
        There were conflicts to decide who would go on them, but deep down, everyone knew it was in vain.
        Even if they managed to reach the end of their journey, they did not have the necessary technology to survive on that planet.
        It was only a desperate attempt to send a seed into the cosmos... one that would never manage to take root.

        <i><entity>You refused to participate in the development of their civilization, and now they face an inevitable death.</entity></i>
        <i><entity>Could it be said that it is truly your fault?</entity></i>
        <i><entity>You let fate follow its course, claiming billions of lives, along with centuries of history and progress.</entity></i>
        <i><entity>Is the situation that has happened to them your responsibility?</entity></i>
        <i><entity>In any case, your inaction does not exempt you from the <strong>final question</strong></entity></i>

        <i><strong><entity>Why did you not help them?</entity></strong></i>

        Three doors materialize before you.

        Gray Door 1: Because it was not my responsibility.

        Gray Door 2: Because I was afraid to intervene.

        Gray Door 3: Because I did not care about them.

        `
    },
    choices: [
      {
        text: {
          es: "Cruzar la primera puerta gris",
          en: "Cross the first gray door"
        },
        next: "001_004_002_001_no_responsibility"
      },
      {
        text: {
          es: "Cruzar la segunda puerta gris",
          en: "Cross the second gray door"
        },
        next: "001_004_002_002_fear_ending"
      },
      {
        text: {
          es: "Cruzar la tercera puerta gris",
          en: "Cross the third gray door"
        },
        next: "001_004_002_003_careless_ending"
      }
    ]
  }
};