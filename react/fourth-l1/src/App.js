import React, { Fragment } from "react";
import Input from "./Components/Input";
import "./App.css";

class App extends React.Component {
  state = {
    name: ""
  };
  handleName(temp) {
    this.setState({
      name: temp
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container text-center w-25">
          <Input
            name={this.state.name}
            fromInput={temp => {
              this.handleName(temp);
            }}
          />
          <div className="border border-success pl-4">
            <span>{this.state.name}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
