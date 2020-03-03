import React, { Fragment } from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    let data = this.props.todos;
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newData;

    console.log("var", typeof month);
    console.log("props", typeof this.props.display);

    if (this.props.display === "-1") {
      console.log("-1");
      newData = this.props.todos.filter((elem, index) => {
        let newdate = elem.date.split("-");
        console.log("newdate", newdate);

        return (
          year > Number(newdate[0]) ||
          month > Number(newdate[1]) ||
          day > Number(newdate[2])
        );
      });

      data = newData;
    }
    if (this.props.display === "1") {
      console.log("1");
      newData = this.props.todos.filter((elem, index) => {
        return new Date(elem.date) > new Date();
      });
      data = newData;
    }
    if (this.props.display === "0") {
      console.log("0");
      newData = this.props.todos.filter((elem, index) => {
        let newdate = elem.date.split("-");

        return (
          year === Number(newdate[0]) &&
          month === Number(newdate[1]) &&
          day === Number(newdate[2])
        );
      });
      data = newData;
    }

    return (
      <Fragment>
        <div>
          <div>
            <select
              onChange={e => {
                this.props.dispatch({
                  type: "display",
                  payload: e.target.value
                });
              }}
            >
              <option value="0">today</option>
              <option value="-1">previous</option>
              <option value="1">next</option>
            </select>
          </div>
          <center>
            {data.map((elem, index) => {
              console.log("List", elem);

              return (
                <h4 key={index}>
                  {elem.todo}----{elem.date}
                </h4>
              );
            })}
          </center>
        </div>
      </Fragment>
    );
  }
}

const fromStore = state => {
  return {
    todos: state.todos,
    display: state.display
  };
};

export default connect(fromStore)(List);
