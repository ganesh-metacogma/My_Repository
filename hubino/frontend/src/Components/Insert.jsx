import React, { Fragment } from "react";
import axios from "axios";
class Insert extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    gender: "",
  };

  handleSend = () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.gender === ""
    ) {
      return alert("Please fill all the fields");
    }
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(this.state.email)) {
      return alert("Please enter valid email");
    }

    if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      return alert("Enter valid 10 digit Phone number!");
    }

    axios
      .post("/create-customer", this.state)
      .then((res) => {
        alert("Customer added");
        window.location.reload();
      })
      .catch((err) => {
        alert("Faild to add Customer");
      });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="d-flex flex-row justify-content-center pt-4 mt-4 text-center">
          <div
            className="card"
            style={{ width: "22rem", borderRadius: "20px" }}
          >
            <div className="card-body">
              <div className="p-4">
                <h3 className="card-title float-left pt-2 pb-3">
                  Add Customer
                </h3>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/material-rounded/24/000000/user.png" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/material-rounded/24/000000/important-mail.png" />{" "}
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    phone={this.state.email}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/android/24/000000/phone.png" />{" "}
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="d-flex justify-content-around pt-2 pb-2">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={this.handleInput}
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={this.handleInput}
                  />
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={this.handleInput}
                  />
                  <label for="other">Other</label>
                  <br />
                </div>
                <button
                  id="send"
                  className="mt-2 float-right"
                  onClick={() => {
                    this.handleSend();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Insert;
