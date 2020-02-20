import { createStore } from "redux";
let inState = {
  isLoggedIn: true
};

function appreducer(state = inState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

let store = createStore(appreducer);

export default store;
