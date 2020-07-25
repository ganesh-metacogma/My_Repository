import React, { Fragment } from "react";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex justify-content-between pt-2 mb-5">
          <div className="d-flex " style={{ height: "4rem" }}>
            <button>Home</button>
            <div
              id="study_name "
              className="text-center"
              style={{ width: "31rem" }}
            >
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
