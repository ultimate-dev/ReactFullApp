// Store
import store from "../store";

export function appStarted() {
  store.dispatch({
    type: "APP_STARTED",
  });
}
