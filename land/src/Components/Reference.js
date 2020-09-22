import React, { Fragment } from "react";
import { Button, Table, Tabs, Drawer } from "antd";

const { TabPane } = Tabs;

function Poper(prop) {
  let { ...rest } = prop;
  return (
    <Drawer
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...rest}
      width={"50vw"}
    >
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="PubMed" key="1">
          <h2 className="text-center">PubMed</h2>
        </TabPane>
        <TabPane tab="Others" key="2">
          <h2 className="text-center">Others</h2>
        </TabPane>
        <TabPane tab="Existing" key="3">
          <h2 className="text-center">Existing</h2>
        </TabPane>
      </Tabs>
    </Drawer>
  );
}

class Reference extends React.Component {
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
    poper: false,
  };

  showPoper = () => {
    this.setState({ poper: true });
  };
  hidePoper = () => {
    this.setState({ poper: false });
  };

  render() {
    return (
      <Fragment>
        <div className="text-center">
          <p>
            The following publications will apper in the protocol's list of
            rferances. You may also use them specify footnotes within the
            protocol text.
          </p>

          <Button
            type="primary"
            onClick={() => {
              this.showPoper();
            }}
          >
            Add
          </Button>

          <Table columns={this.state.column} />
        </div>
        <Poper
          title="Add References"
          visible={this.state.poper}
          onOk={this.hidePoper}
          onClose={this.hidePoper}
        />
      </Fragment>
    );
  }
}

export default Reference;
