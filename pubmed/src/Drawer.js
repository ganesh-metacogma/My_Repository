import { Drawer, Form, Button, Col, Row, Input, Select } from "antd";
import React from "react";
import Demo from "./Tabs.js";

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" className="float-left" onClick={this.showDrawer}>
          Pubmed
        </Button>

        <Drawer
          title="Add References"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Demo />
        </Drawer>
      </>
    );
  }
}

export default DrawerForm;
