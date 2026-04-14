import { firstLevelScenes } from "./level_1_data";
import { secondLevelScenes } from "./level_2_data";
import { thirdLevelScenes } from "./level_3_data";
import { secondLevelScenesEndings } from "./level_2_data_endings";
import { thirdLevelScenesEndings } from "./level_3_data_endings";
import { fourthLevelScenesEndings } from "./level_4_data_endings";

export const scenes = {
  ...firstLevelScenes,
  ...secondLevelScenes,
  ...thirdLevelScenes,
  ...secondLevelScenesEndings,
  ...thirdLevelScenesEndings,
  ...fourthLevelScenesEndings
};

export const itemTranslations = {
  key: {
    es: "Llave",
    en: "Key"
  }
};

export const narrationTranslations = {
  lines: {
    es: "líneas",
    en: "lines"
  },
  need: {
    es: "necesitas",
    en: "you need"
  },
  ending: {
    es: "FIN DE LA PARTIDA",
    en: "END OF THE GAME"
  },
  replay: {
    es: "JUGAR DE NUEVO",
    en: "PLAY AGAIN"
  }
};