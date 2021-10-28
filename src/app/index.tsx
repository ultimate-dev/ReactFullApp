import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AOS from "aos";
import moment from "moment";
// Moment Locales
import "moment/locale/tr";
import "moment/locale/en-gb";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Hooks
import useQuery from "../hooks/useQuery";
// Actions
import { appStarted } from "../store/actions";
// Locales
import I18n, { DEFAULT } from "../locales";
// Source
import pages from "./pages";
import navs from "./navs";

/**
 * AOS Generate
 */
const generateAOS = () => {
  AOS.init({
    offset: 80,
    duration: 1000,
    easing: "ease",
    once: true,
  });
  AOS.refresh();
};

/**
 * Locale Dispacth Lang
 */
const dispatchLocale = (lang: string) => {
  I18n.locale = lang;
  localStorage.setItem("lang", lang);
  moment.locale(lang);
  document.documentElement.lang = lang;
};

/**
 * App
 */
function App() {
  let query = useQuery();
  dispatchLocale(query.get("lang") || localStorage.getItem("lang") || DEFAULT);

  useEffect(() => {
    appStarted();
    generateAOS();
  }, []);

  return (
    <main>
      <Navbar navs={navs} />
      <Switch>
        {pages.map((page, key: number) => (
          <Route
            key={key}
            path={page.path}
            render={(props: any) => <page.render {...props} />}
            exact={page.exact}
          />
        ))}
      </Switch>
      <Footer />
    </main>
  );
}
export default App;
