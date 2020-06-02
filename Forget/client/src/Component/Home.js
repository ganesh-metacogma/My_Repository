import React, { Fragment } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    mobile: "",
  };

  handelChange(e) {
    this.setState(
      {
        mobile: e.target.value,
      },
      () => {
        console.log("state", this.state.mobile);
      }
    );
  }

  handleSend() {
    axios
      .post("http://localhost:3020/step2", this.state)
      .then((res) => {
        this.props.dispatch({ type: "id", payload: res.data });
      })
      .catch((error) => {
        throw error;
      });
  }
  render() {
    if (this.props.id) return <Redirect to="/verify" />;
    console.log("ID", this.props.id);
    return (
      <Fragment>
        <label>Mobile</label>
        <input
          type="number"
          value={this.state.mobile}
          name="mobile"
          onChange={(e) => {
            this.handelChange(e);
          }}
        />

        <button
          onClick={() => {
            this.handleSend();
          }}
          disabled={!this.state.mobile ? true : false}
        >
          Send me Otp
        </button>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return {
    id: state.id,
  };
};

export default connect(fromStore)(Home);
