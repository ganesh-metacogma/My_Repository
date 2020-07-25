import React, { Fragment } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function PopObjective(props) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>This is Objective</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Editor
          onChange={(e) => {
            console.log(e.blocks[0].text);
          }}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </Modal.Body>
    </Modal>
  );
}

function PopAssessment(props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>This is Assessment</Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

function PopEndpoint(props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>This is Endpoint</Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

class Objectives extends React.Component {
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
        <div className="px-5">
          <div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </span>
          </div>
          <br />
          <div>
            <div id="primary_objectives" className="pt-3">
              <h4>Primary Objectives</h4>
              <div className="d-flex ">
                <button
                  className="rounded"
                  name="m_objective"
                  onClick={(e) => this.modalOpen(e.target.name)}
                >
                  Add Objective
                </button>
                <button
                  className="ml-3 rounded"
                  name="m_endpoint"
                  onClick={(e) => this.modalOpen(e.target.name)}
                >
                  Add Endpoints
                </button>
                <button
                  className="ml-3 rounded"
                  name="m_assessment"
                  onClick={(e) => this.modalOpen(e.target.name)}
                >
                  Add Assessments
                </button>
              </div>
            </div>
            <div id="secondary_objectives" className="pt-4">
              <h4>Secondary Objectives</h4>
              <div className="d-flex ">
                <button className="rounded">Add Objective</button>
                <button className="ml-3 rounded" disabled>
                  Add Endpoints
                </button>
                <button className="ml-3 rounded" disabled>
                  Add Assessments
                </button>
              </div>
            </div>
            <div id="exploratary_objectives" className="pt-4">
              <h4>Exploratary Objectives</h4>
              <div className="d-flex ">
                <button className="rounded">Add Objective</button>
                <button className="ml-3 rounded" disabled>
                  Add Endpoints
                </button>
                <button className="ml-3 rounded" disabled>
                  Add Assessments
                </button>
              </div>
            </div>
          </div>
        </div>
        <PopObjective
          show={this.state.m_objective}
          onHide={() => {
            this.modalHide();
          }}
        />
        <PopEndpoint
          show={this.state.m_endpoint}
          onHide={() => {
            this.modalHide();
          }}
        />
        <PopAssessment
          show={this.state.m_assessment}
          onHide={() => {
            this.modalHide();
          }}
        />
        {/* <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.m_objective}
          onHide={() => {
            this.modalHide();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>This is Objective</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Editor
              onChange={(e) => {
                console.log(e.blocks[0].text);
              }}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </Modal.Body>
        </Modal> */}

        {/* <Modal
          show={this.state.m_assessment}
          onHide={() => {
            this.modalHide();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>This is Assessment</Modal.Title>
          </Modal.Header>
        </Modal> */}

        {/* <Modal
          show={this.state.m_endpoint}
          onHide={() => {
            this.modalHide();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>This is Endpoint</Modal.Title>
          </Modal.Header>
        </Modal> */}
      </Fragment>
    );
  }
}

export default Objectives;
