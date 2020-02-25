import React, { Fragment } from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.props.datas.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const fromStore = state => {
  return {
    datas: state.todos
  };
};

export default connect(fromStore)(List);
