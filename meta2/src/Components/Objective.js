import React, { Fragment } from "react";
import { Modal, Layout, Button } from "antd";
import { Tabs } from "antd";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const { Content } = Layout;

const { TabPane } = Tabs;
function PopObjective(props) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Tabs defaultActiveKey="3">
        <TabPane tab="Predefined" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="From Existing Study" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Create New" key="3">
          <Editor
            onChange={(e) => {
              console.log(e.blocks[0].text);
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </TabPane>
      </Tabs>
    </Modal>
  );
}

function Pop(props) {
  let { body, ...rest } = props;
  return (
    <Modal {...rest}>
      <h5>{body}</h5>
    </Modal>
  );
}

class Objective extends React.Component {
  state = {
    m_assessment: false,
    m_endpoint: false,
    m_objective: false,
  };

  modalOpen = (key) => {
    this.setState({ [key]: true });
  };

  modalHide = () => {
    this.setState({
      m_assessment: false,
      m_endpoint: false,
      m_objective: false,
    });
  };

  render() {
    return (
      <Fragment>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="px-2">
            <div>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <br />
            <div>
              <span>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </span>
            </div>
            <br />
            <div>
              <div className="mt-5">
                <h4>Primaray Objective</h4>
                <div className="d-flex ">
                  <Button
                    className="rounded"
                    name="m_objective"
                    onClick={() => this.modalOpen("m_objective")}
                  >
                    Add Objective
                  </Button>
                  <Button
                    className="ml-3 rounded"
                    name="m_endpoint"
                    onClick={() => this.modalOpen("m_endpoint")}
                  >
                    Add Endpoint
                  </Button>
                  <Button
                    className="ml-3 rounded"
                    name="m_assessment"
                    onClick={() => this.modalOpen("m_assessment")}
                  >
                    Link Assessment
                  </Button>
                </div>
              </div>
              <div className="mt-5">
                <h4>Secondary Objective</h4>
                <div className="d-flex ">
                  <Button className="rounded">Add Objective</Button>
                  <Button className="ml-3 rounded" disabled>
                    Add Endpoint
                  </Button>
                  <Button className="ml-3 rounded" disabled>
                    Link Assessment
                  </Button>
                </div>
              </div>
              <div className="mt-5">
                <h4>Exploratory Objective</h4>
                <div className="d-flex ">
                  <Button className="rounded">Add Objective</Button>
                  <Button className="ml-3 rounded" disabled>
                    Add Endpoint
                  </Button>
                  <Button className="ml-3 rounded" disabled>
                    Link Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <PopObjective
          title="Objective"
          visible={this.state.m_objective}
          onOk={this.modalHide}
          onCancel={this.modalHide}
        />
        <Pop
          title="Endpoint"
          visible={this.state.m_endpoint}
          onOk={this.modalHide}
          onCancel={this.modalHide}
          body={"This is Endpoint"}
        />
        <Pop
          title="Assessment"
          visible={this.state.m_assessment}
          onOk={this.modalHide}
          onCancel={this.modalHide}
          body={"This is Assessment"}
        />
      </Fragment>
    );
  }
}

export default Objective;
