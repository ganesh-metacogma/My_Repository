import React from "react";
import { Fragment } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: "",
    list: []
  };

  handleName(name) {
    this.setState(
      {
        list: [...this.state.list, name]
      },
      () => {
        this.setState({
          value: ""
        });
      }
    );
  }

  handleValue(name) {
    this.setState({
      value: name
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container text-center w-25">
          <div className="mx-auto border border-dark p-4 m-4">
            <label>Enter text</label>
            <input
              className="mb-3"
              type="text"
              value={this.state.value}
              onChange={event => {
                this.handleValue(event.target.value);
              }}
            />
            <button
              onClick={() => {
                this.handleName(this.state.value);
              }}
              disabled={!this.state.value ? true : false}
            >
              Submit
            </button>
          </div>
          <div className="border border-success pl-4">
            <ul>
              {this.state.list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
