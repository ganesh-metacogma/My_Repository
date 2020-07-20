import React, { Fragment } from "react";
import option from "../option.json";
class Sidebar extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="sidebar">
          {option.map((elem) => {
            return (
              <span id="option">
                {elem.name}
                <hr />
              </span>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
