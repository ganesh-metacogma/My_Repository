import React from "react";
import "./App.css";
import { Fragment } from "react";
import { connect } from "react-redux";

import List from "./Components/List";

function App() {
  return (
    <Fragment>
      <div>
        <List />
      </div>
    </Fragment>
  );
}
const fromStore = state => {
  return state;
};

export default connect(fromStore)(App);
