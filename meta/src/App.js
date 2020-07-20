import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Nav from "./Components/Nav";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <hr />
        <Sidebar />
      </Fragment>
    );
  }
}

export default App;
