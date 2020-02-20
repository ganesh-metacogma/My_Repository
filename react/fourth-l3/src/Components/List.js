import React from "react";
import { Fragment } from "react";

class List extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="border border-success pl-4 ">
          <ul>
            {this.props.todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.task}-----{todo.user}
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default List;
