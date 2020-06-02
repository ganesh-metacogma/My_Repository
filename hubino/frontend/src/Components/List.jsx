import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import axios from "axios";
class List extends React.Component {
  state = {
    show: false,
    id: this.props.update._id,
    name: this.props.update.name,
    email: this.props.update.email,
    phone: this.props.update.phone,
    gender: this.props.update.gender,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (
      this.props.update.name !== prevProps.update.name ||
      this.props.update.email !== prevProps.update.email ||
      this.props.update.phone !== prevProps.update.phone ||
      this.props.update.gender !== prevProps.update.gender
    ) {
      this.setState({
        show: true,
        name: this.props.update.name,
        email: this.props.update.email,
        phone: this.props.update.phone,
        gender: this.props.update.gender,
      });
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  Delete = (id) => {
    axios
      .delete(`/delete-customer/${id}`)
      .then((res) => {
        alert("Customer deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to Delete!");
      });
  };

  handleOption = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleUpdate = () => {
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

    let body = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
    };
    axios
      .put(`/update-customer/${this.props.update._id}`, body)
      .then((res) => {
        this.props.dispatch({ type: "uncheck" });
        alert("Customer updated");
        this.handleHide();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update");
      });
  };

  handleShow(elem) {
    this.props.dispatch({
      type: "check",
      payload: elem,
    });
    this.setState({
      show: true,
    });
  }
  handleHide() {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row w-100 border border-light bg-light">
            <h3 className="text-secondary pl-3">All Customers</h3>
          </div>
          <table className="table table-striped  text-center">
            <tbody>
              {this.props.customers ? (
                this.props.customers.map((elem) => {
                  return (
                    <tr>
                      <td>{elem.name}</td>
                      <td>{elem.email}</td>
                      <td>{elem.phone}</td>
                      <td>{elem.gender}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            this.handleShow(elem);
                          }}
                        >
                          update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.Delete(elem._id);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className=" text-center">No Customer available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleHide();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mt-3">
              <div>
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
                    value={this.state.email}
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
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="https://img.icons8.com/metro/26/000000/gender--v1.png" />{" "}
                    </span>
                  </div>
                  <select
                    className="form-control"
                    value={this.state.gender}
                    onChange={(event) => {
                      this.handleOption(event);
                    }}
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-primary"
              disabled={
                !this.state.name ||
                !this.state.email ||
                !this.state.phone ||
                !this.state.gender
              }
              onClick={() => {
                this.handleUpdate();
              }}
            >
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const fromState = (state) => {
  return { customers: state.customers, update: state.update };
};
export default connect(fromState)(List);
