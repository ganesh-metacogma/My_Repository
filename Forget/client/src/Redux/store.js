import { createStore } from "redux";

let inState = {
  id: null,
  status: false,
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "id":
      copy.id = action.payload;
      return copy;

    case "status":
      copy.status = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
