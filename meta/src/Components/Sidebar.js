import React, { Fragment } from "react";
import option from "../option.json";
class Sidebar extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="sidebar" className="w-75">
          {option.map((elem) => {
            return (
              <span id="option" className="pl-1">
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
