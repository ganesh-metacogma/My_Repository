import { Modal, Button } from "antd";
import React, { Fragment } from "react";

//import Tabberi from './tabs_inclusion';
import { Tabs } from "antd";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//import Tableit from './table_inclusion_template';
import Tableie from "./table_inclusion_existing";

const { TabPane } = Tabs;

class Pop extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <Fragment>
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabinterface />
        </Modal>
      </Fragment>
    );
  }
}
const Tabinterface = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="From Template" key="1">
      <p>select from existing studies you can filter any column</p>
    </TabPane>
    <TabPane tab="From Existing Study" key="2">
      <p>select from existing studies you can filter any column</p>
    </TabPane>
    <TabPane tab="Create New" key="3">
      <div id="hell">
        <Editor
          onChange={(e) => {
            console.log(e.blocks[0].text);
          }}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
    </TabPane>
  </Tabs>
);

export default Pop;
