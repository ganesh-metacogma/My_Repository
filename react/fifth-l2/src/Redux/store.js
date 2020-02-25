import { createStore } from "redux";

let inState = {
  searchTerm: "aaa"
};

const appReducer = (state = inState, action) => {
  console.log(state);
  let copy = { ...state };
  switch (action.type) {
    case "change":
      copy.searchTerm = action.payload;
      return copy;

    default:
      return state;
  }
};

let store = createStore(appReducer);

export default store;
