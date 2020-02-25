import React, { Fragment } from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3>{this.props.searchTerm}</h3>
        </div>
      </Fragment>
    );
  }
}

const fromStore = state => {
  return {
    searchTerm: state.searchTerm
  };
};

export default connect(fromStore)(List);
