import React from "react";
import "./App.css";
import { Fragment } from "react";

class App extends React.Component {
  state = {
    name: ""
  };
  handleName(name) {
    this.setState(
      {
        name: name
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <Fragment>
        <div className="container text-center w-25">
          <div className="mx-auto border border-dark p-4 m-4">
            <label>Enter text</label>
            <input
              type="text"
              value={this.state.name}
              onChange={event => {
                this.handleName(event.target.value);
              }}
            />
          </div>
          <div className="border border-success pl-4">
            <span>{this.state.name}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
