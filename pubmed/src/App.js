import React, { Fragment } from "react";
import "./App.css";
import DrawerForm from "./Drawer.js";
import { Table } from "antd";

class App extends React.Component {
  state = {
    column: [
      {
        title: "ID",
        sorter: {
          compare: (a, b) => a.protocol_id - b.protocol_id,
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Title",
        sorter: (a, b) => {
          return ("" + a.created_at).localeCompare(b.created_at);
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Author",
        sorter: (a, b) => {
          return ("" + a.created_at).localeCompare(b.created_at);
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Year",
        sorter: {
          compare: (a, b) => a.protocol_id - b.protocol_id,
        },
        sortDirections: ["descend", "ascend"],
      },
    ],
  };
  render() {
    return (
      <Fragment className=" container text-center">
        <p className="text=left">
          The following publications will apper in the protocol's list of
          rferances. You may also use them specify footnotes within the protocol
          text.
        </p>
        <DrawerForm />
        <Table columns={this.state.column} />
      </Fragment>
    );
  }
}

export default App;
