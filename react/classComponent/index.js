const Button = prop => {
  console.log(prop.name, prop.number, prop.boot);
  return (
    <button className={prop.boot}>
      {prop.name},{prop.number}
    </button>
  );
};

class Footer extends React.Component {
  render() {
    return (
      <div className="text-white bg-dark container-fluid p-5 text-center">
        <div className="footer">
          Copyrights @2020
          <Button name="save" number="1" boot="btn btn-success "></Button>
          <Button name="edit" number="1" boot="btn btn-secondary "></Button>
          <Button name="delete" number="1" boot="btn btn-danger "></Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Footer />, document.getElementById("root"));
