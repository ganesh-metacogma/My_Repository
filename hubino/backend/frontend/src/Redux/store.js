import { createStore } from "redux";
let inState = {
  customers: [],
  update: "",
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "list":
      copy.customers = action.payload;
      console.log(copy);
      return copy;

    case "check":
      copy.update = action.payload;
      return copy;

    case "uncheck":
      copy.update = "";
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
