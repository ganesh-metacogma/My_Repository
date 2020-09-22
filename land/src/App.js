import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import Create from "./Components/Create";
import Reference from "./Components/Reference";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Reference />
      </Fragment>
    );
  }
}

export default App;
