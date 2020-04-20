import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    avatar: null,
  };

  handleinput(e) {
    this.setState({
      avatar: e.target.files[0],
    });
  }
  handleUpload = async () => {
    let fd = new FormData();
    fd.append("image", this.state.avatar, this.state.avatar.name);
    await axios.post("http://localhost:3010/uploder", fd).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <Fragment>
        <input
          name="avatar"
          type="file"
          onChange={(event) => {
            this.handleinput(event);
          }}
        />
        <button
          onClick={() => {
            this.handleUpload();
          }}
        >
          upload
        </button>
      </Fragment>
    );
  }
}

export default App;
