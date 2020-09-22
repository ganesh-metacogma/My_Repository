import React, { Fragment } from "react";
import { Modal, Button, Tabs, Form, Input } from "antd";

const { Search } = Input;
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
        <Button
          type="primary"
          onClick={() => {
            this.showModal();
          }}
        >
          PubMed
        </Button>
        <Modal
          title="Add Reference"
          visible={this.state.visible}
          onOk={() => {
            this.handleOk();
          }}
          onCancel={() => {
            this.handleCancel();
          }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="From PubMed" key="1">
              <Search placeholder="Search by PubMed ID or Title" enterButton />
              <br />
              <br />
              <Form>
                <Form.Item label="" name="layout"></Form.Item>
                <Form.Item label="PubMedId">
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item label="Source">
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item label="Title">
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item label="Authors">
                  <Input placeholder="" />
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Other" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Existing" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Modal>
      </Fragment>
    );
  }
}

export default Pop;
