import React, { Fragment } from "react";
import logo from "./logo.svg";
import Burger from "./Components/Burger";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="App">
          <Burger />

          <div id="page-wrap">
            <h1>Cool Restaurant 🍔🍕</h1>
            <h2>Check out our offerings in the sidebar!</h2>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
