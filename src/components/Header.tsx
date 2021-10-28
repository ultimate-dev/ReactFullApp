import { Fragment } from "react";
import { Helmet } from "react-helmet";
// Configs
import configs from "../configs";
// Locales
import I18n from "../locales";

/**
 * Props
 */
class HeaderProps {
  title?: string;
}

export default ({ title }: HeaderProps) => {
  return (
    <Fragment>
      <Helmet>
        <title>{configs.NAME + " | " + title}</title>
      </Helmet>
      <div className="p-4">
        <small>{I18n.t("hello")}</small>
        <h3 className="text-xl font-bold uppercase">{title}</h3>
        <hr />
      </div>
    </Fragment>
  );
};
