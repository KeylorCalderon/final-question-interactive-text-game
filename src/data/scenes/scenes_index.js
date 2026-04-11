import { firstLevelScenes } from "./level_1_data";
import { secondLevelScenes } from "./level_2_data";
import { thirdLevelScenes } from "./level_3_data";
import { fourthLevelScenes } from "./level_4_data";

export const scenes = {
  ...firstLevelScenes,
  ...secondLevelScenes,
  ...thirdLevelScenes,
  ...fourthLevelScenes
};

export const itemTranslations = {
  key: {
    es: "Llave",
    en: "Key"
  }
};