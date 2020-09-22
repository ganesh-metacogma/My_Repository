import React, { Fragment } from "react";
import { Button } from "antd";

import { Input, Calendar } from "antd";
class Create extends React.Component {
  state = {
    protocol_id: "",
    indication: "",
    theropeutic_area: "",
    compound: "",
    phase: "",
    study_type: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCancel = () => {
    this.setState({
      protocol_id: "",
      indication: "",
      theropeutic_area: "",
      compound: "",
      phase: "",
      study_type: "",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="text-center">
          <p>Create a Study</p>

          <div className="d-flex">
            <label>Protocol ID</label>
            <Input
              value={this.state.protocol_id}
              name="protocol_id"
              onChange={this.handleInput}
            />
          </div>

          <div className="d-flex">
            <label>Indication</label>
            <select
              value={this.state.indication}
              name="indication"
              onChange={this.handleInput}
            />
          </div>

          <div className="d-flex">
            <label>Theropeutic Area</label>
            <select
              value={this.state.theropeutic_area}
              name="theropeutic_area"
              onChange={this.handleInput}
            />
          </div>

          <div className="d-flex">
            <label>Compound</label>
            <Input
              value={this.state.compound}
              name="compound"
              onChange={this.handleInput}
            />
          </div>

          <div className="d-flex">
            <label>Phase</label>
            <select
              value={this.state.phase}
              name="phase"
              onChange={this.handleInput}
            />
          </div>

          <div className="d-flex">
            <label>Study Type</label>
            <select
              value={this.state.study_type}
              name="study_type"
              onChange={this.handleInput}
            />
          </div>
          <div className="d-flex justify-content-around">
            <Button type="primary" onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button
              type="primary"
              disabled={
                !this.state.protocol_id ||
                !this.state.theropeutic_area ||
                !this.state.study_type ||
                !this.state.phase ||
                !this.state.compound ||
                !this.state.indication
                  ? true
                  : false
              }
            >
              Primary Button
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Create;
