import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Nav from "./Components/Nav";
import Objectives from "./Components/Objectives";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <hr />
        <div id="sub">
          <Sidebar />
          
          <Objectives />
        </div>
      </Fragment>
    );
  }
}

export default App;
