import { TFunction } from "i18next";

import i18next from "@/i18t";

export const tJoin = (words: string[], t: TFunction = i18next.t) => {
  return words.map((w) => t(w)).join(" ");
};
