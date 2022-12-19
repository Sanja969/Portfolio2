const INITIAL_STATE = false;
const TRIGGER_MENU = "TRIGGER_MENU";

export const dropdownReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TRIGGER_MENU:
      return !state;
    default:
      return state;
  }
}

export const triggerMenu = (project) => ({
  type: TRIGGER_MENU,
})