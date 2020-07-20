import React, { Fragment } from "react";
// import logo from "./logo.svg";
//import "./App.css";
import Home from "./Components/Home";
import Jack from "./Components/Jack";
import "./style/jack.css";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Jack />
      </Fragment>
    );
  }
}

export default App;
