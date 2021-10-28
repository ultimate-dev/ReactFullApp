import I18n from "i18n-js";
// Languages
import tr from "./langs/tr";
import en from "./langs/en";

export const DEFAULT = window.navigator.language.substring(0, 2);

I18n.fallbacks = true;

I18n.locales.no = "tr";
I18n.translations = {
  tr,
  en,
};
I18n.locale = DEFAULT;

export default I18n;
