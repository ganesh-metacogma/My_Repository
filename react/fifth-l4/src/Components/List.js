import React, { Fragment } from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    let state = {
      todos: this.props.todos
    };

    const handleFilter = value => {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      switch (value) {
        case "previous":
          return filterPrevious(year, month, day);

        case "next":
          return filterNext(year, month, day);

        default:
          return filterToday(year, month, day);
      }
    };

    const filterPrevious = (year, month, day) => {
      let newData = state.todos.filter((elem, index) => {
        let newdate = elem.date.split("-");

        return year > newdate[0] || month > newdate[1] || day > newdate[2];
      });

      state.todos = newData;
      this.props.dispatch({ type: "previous", payload: newData });
    };

    const filterNext = (year, month, day) => {
      let newData = state.todos.filter((elem, index) => {
        let newdate = elem.date.split("-");

        return year < newdate[0] || month < newdate[1] || day < newdate[2];
      });

      state.todos = newData;
    };
    const filterToday = (year, month, day) => {
      let newData = state.todos.filter((elem, index) => {
        let newdate = elem.date.split("-");

        return (
          year === newdate[0] || month === newdate[1] || day === newdate[2]
        );
      });

      state.todos = newData;
    };

    return (
      <Fragment>
        <div>
          <div>
            <select
              onChange={e => {
                handleFilter(e.target.value);
              }}
            >
              <option>today</option>
              <option>previous</option>
              <option>next</option>
            </select>
          </div>
          <center>
            {state.todos.map((elem, index) => {
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
    todos: state.todos
  };
};

export default connect(fromStore)(List);
