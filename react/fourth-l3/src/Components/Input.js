import React from "react";
import { Fragment } from "react";

class Input extends React.Component {
  state = {
    task: "",
    user: this.props.users[0]
  };
  handleTask(task) {
    this.setState({
      task
    });
  }
  handleUser = e => {
    let { value } = e.target;
    this.setState({
      user: value
    });
  };
  render() {
    return (
      <Fragment>
        <div className="mx-auto border border-dark p-4 m-4">
          <input
            className="mr-3"
            type="text"
            onChange={event => {
              this.handleTask(event.target.value);
            }}
          />
          <select className="mr-3" onChange={this.handleUser}>
            {this.props.users.map((user, index) => {
              return (
                <option key={index} selected={index === 0 ? true : false}>
                  {user}
                </option>
              );
            })}
          </select>

          <button
            disabled={!this.state.task ? true : false}
            onClick={() => {
              this.props.fromInput(this.state);
            }}
          >
            Submit
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Input;
