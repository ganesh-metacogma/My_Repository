import { createStore } from "redux";

let inState = {
  todos: []
};

const appReducer = (state = inState, action) => {
  let copy = { ...state };

  switch (action.type) {
    case "add":
      copy.todos = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
