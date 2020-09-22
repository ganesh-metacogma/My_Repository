import React, { useState } from "react";
import { Button, Drawer, Space, Popconfirm, Form, Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Table from "./Common/Table";

class Abbreviations extends React.Component {
  state = {
    mnemonic: "",
    defination: "",
    visible: false,
    key: "",
    text: "",

    // table title

    column: [
      {
        title: "Mnemonic",
        dataIndex: "name",
      },

      {
        title: "Definition",
        dataIndex: "address",
        // function which change the text into input field conditionally
        render: (text, result) => {
          return result.key === this.state.id ? (
            <input
              name="text"
              value={this.state.text}
              autoFocus
              onChange={this.handleChange}
            />
          ) : (
            <p onClick={() => this.handleInput(result)}>{text}</p>
          );
        },
      },
      {
        title: "Action",
        dataIndex: "",
        // function which change buttons conditionally and update, delete and reset the data
        render: (text, result) => {
          return (
            <Space direction="horizontal">
              {result.key === this.state.id ? (
                <Space>
                  <Button onClick={this.handleUpdate} type="primary">
                    Save
                  </Button>
                  <Button onClick={() => this.setState({ id: "", text: "" })}>
                    Cancel
                  </Button>
                </Space>
              ) : null}
              {result.key === this.state.id ? null : (
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => this.handleDelete(result.key)}
                >
                  <a>
                    <div style={{ color: "#AE0202" }}>
                      <b>X</b>
                    </div>
                  </a>
                </Popconfirm>
              )}
            </Space>
          );
        },
      },
    ],

    // table data

    data: [
      {
        key: "1",
        name: "John Brown",

        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",

        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",

        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "4",
        name: "John Brown",

        address: "New York No. 1 Lake Park",
      },
      {
        key: "5",
        name: "Jim Green",

        address: "London No. 1 Lake Park",
      },
      {
        key: "6",
        name: "Joe Black",

        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "7",
        name: "John Brown",

        address: "New York No. 1 Lake Park",
      },
      {
        key: "8",
        name: "Jim Green",

        address: "London No. 1 Lake Park",
      },
      {
        key: "9",
        name: "Joe Black",

        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "10",
        name: "John Brown",

        address: "New York No. 1 Lake Park",
      },
      {
        key: "11",
        name: "Jim Green",

        address: "London No. 1 Lake Park",
      },
      {
        key: "12",
        name: "Joe Black",

        address: "Sidney No. 1 Lake Park",
      },
    ],
  };

  // function which enable drawer for adding data
  showDrawer = async () => {
    await this.setState({
      visible: true,
    });
  };

  // function which disbale drawer
  onClose = async () => {
    await this.setState({
      visible: false,
      mnemonic: "",
      defination: "",
    });
  };

  // function which collect data of selected row
  handleInput = async (data) => {
    await this.setState({
      id: data.key,
      text: data.address,
    });
  };

  // function used to update data
  handleUpdate = async () => {
    const s = await this.state.data.filter((data) => {
      return data.key === this.state.id;
    });
    s[0].address = await this.state.text;
    this.setState({
      text: "",
      id: "",
    });
  };

  // function which delete data
  handleDelete = (key) => {
    const dataSource = [...this.state.data];
    this.setState({
      data: dataSource.filter((item) => item.key !== key),
    });
  };

  // function for getting input text
  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // function for add new data
  handleAdd = async () => {
    const obj = await {
      key: (this.state.data.length + 1).toString(),
      name: this.state.mnemonic,
      address: this.state.defination,
    };
    await this.setState({
      data: [...this.state.data, obj],
      mnemonic: "",
      defination: "",
    });
    this.onClose();
  };
  render() {
    return (
      <div className="pl-5 pt-2">
        <h1 className="heading">Abbreviations</h1>
        <p className="text">
          The following abbreviation will appear in the protocol's list of
          Abbreviation
        </p>
        {/* button enable drawer from right side */}
        <div className="pt-4">
          {/* table where data render */}
          <Table columns={this.state.column} data={this.state.data} />
        </div>
        {/* drawer code */}
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                <b>Cancel</b>
              </Button>
              <Button onClick={this.handleAdd} type="primary">
                <b>Create</b>
              </Button>
            </div>
          }
          width={660}
        >
          {/* form code*/}
          <Form layout="vertical">
            <h1 className="heading">Add Abbreviation</h1>
            <p className="text">Please Enter a Mnemonic</p>
            <Input
              name="mnemonic"
              value={this.state.mnemonic}
              onChange={this.handleChange}
              style={{ width: "615px" }}
            />

            <p className="text">Please Enter a Defination</p>
            <Editor
              name="defination"
              autoFocus
              value={this.state.defination}
              onChange={(e) => {
                this.setState({
                  defination: e.blocks[0].text,
                });
              }}
            />
          </Form>
        </Drawer>
        <Button
          type="primary"
          onClick={this.showDrawer}
          style={{ float: "right" }}
        >
          <b>Add</b>
        </Button>
      </div>
    );
  }
}
export default Abbreviations;
