class Input extends React.Component {
  state = {
    name: "ABC",
    email: "abc@gmail.com",
    city: "Mumbai"
  };

  handleName = event => {
    this.setState = {
      name: event.target.value
    };
  };
  handleEmail = event => {
    this.setState = {
      email: event.target.value
    };
  };
  handleCity = event => {
    this.setState = {
      city: event.target.value
    };
  };

  sendDataToApp = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <input
          onChange={event => this.handleName(event)}
          value={this.state.name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={event => this.handleEmail(event)}
          value={this.state.email}
          type="email"
          placeholder="email"
        />
        <input
          onChange={event => this.handleCity(event)}
          value={this.state.city}
          type="text"
          placeholder="city"
        />
        <button onClick={() => this.sendDataToApp()}>Submit</button>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  addToList = data => {
    console.log(`Here>>>${data}`);
  };

  render() {
    return (
      <div className="container text-center">
        <Input sendDataFromInput={data => this.addToList(data)} />
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
