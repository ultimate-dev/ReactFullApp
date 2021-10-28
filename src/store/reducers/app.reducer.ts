/**
 * Props
 */
class ActionProps {
  type?: string;
}
class StateProps {
  start?: boolean;
}

/**
 * State
 */
const initial_state: StateProps = {
  start: false,
};

export default function appReducer(
  state: StateProps = initial_state,
  action: ActionProps
) {
  switch (action.type) {
    case "APP_STARTED":
      return {
        start: true,
      };

    default:
      return state;
  }
}
