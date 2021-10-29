import { Fragment } from "react";
// Locales
import I18n from "../locales";
const translations: any[] = Object.values(I18n.translations);

// Locale Change
const changeLocale = (lang: string) => {
  localStorage.setItem("lang", lang);
  I18n.locale = lang;
  window.location.reload();
};

export default () => {
  return (
    <Fragment>
      <div className="flex px-4">
        {translations.map((translation) => (
          <img
            src={translation.flag}
            width="30px"
            height="30px"
            className="m-2 cursor-pointer"
            onClick={() => changeLocale(translation.key)}
          />
        ))}
      </div>
      <hr />
    </Fragment>
  );
};
