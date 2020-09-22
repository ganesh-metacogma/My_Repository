import React from "react";

import "./App.css";

import EditableTable from "./editable_table";

class Abbrevations extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Abbrevations</h1>
        <p>The following glossary will appear in the protocols glossary</p>

        <EditableTable />
      </div>
    );
  }
}

export default Abbrevations;
