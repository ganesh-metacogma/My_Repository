import React from "react";
import { Fragment } from "react";

class Input extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="mx-auto border border-dark p-4 m-4">
          <label>Enter text</label>
          <input
            type="text"
            value={this.props.name}
            onChange={event => {
              this.props.fromInput(event.target.value);
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default Input;
