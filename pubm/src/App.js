import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Pop from "./Components/Pop";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Pop />
      </Fragment>
    );
  }
}

export default App;
