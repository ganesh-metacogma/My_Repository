import React, { Fragment } from "react";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="nav">
          <div id="op">
            <button>Home</button>
            <div id="study_name">
              <span>XTA011A2116</span>
            </div>
            <button>Data Mode</button>
            <button>Test Mode</button>
            <button>View Mode</button>
            <button>Share</button>
            <button>DEPT</button>
          </div>
          <div>
            <input id="search" type="text" />
            <button>Search</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;
