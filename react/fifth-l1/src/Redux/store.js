import { createStore } from "redux";

let inState = {
  todos: [
    { name: "Ganesh", age: 23 },
    { name: "Rakesh", age: 22 },
    { name: "Mukesh", age: 25 },
    { name: "Harish", age: 20 }
  ]
};

const appReducer = (state = inState, action) => {
  return state;
};

let store = createStore(appReducer);

export default store;
