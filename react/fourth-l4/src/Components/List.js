import React from "react";
import { Fragment } from "react";

class List extends React.Component {
  handleClass(user) {
    switch (user) {
      case "Ganesh":
        return "border border-primary";
      case "Jack":
        return "border border-success";
      case "John":
        return "border border-warning";
      case "Rock":
        return "border border-danger";
      default:
        return;
    }
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="border border-dark pl-4 pr-4 pt-4 text-center ">
          {this.props.todos.map((todo, index) => {
            return (
              <div
                key={index}
                className={this.handleClass(todo.user)}
                style={{ borderBlockWidth: "10px", marginBottom: "1rem" }}
              >
                {todo.task}-----{todo.user}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
