const defaultState = {
  noOfDice: 1,
  result: [],
  canShow: false
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_NO_OF_DICE":
      return { ...state, noOfDice: action.noOfDice };
    case "UPDATE_RESULT":
      return { ...state, result: action.result };
    case "SHOW_RESULT":
      return { ...state, canShow: true };
    default:
      return state;
  }
};

export default rootReducer;
