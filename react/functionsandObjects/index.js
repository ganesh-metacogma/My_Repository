const button = ({ name, number, boot }) => {
  return (
    <button className={boot}>
      {name},{number}
    </button>
  );
};

const footer = (
  <div className="container-fluid">
    <div className="my-footer">
      {button({ name: "save", number: 1, boot: "btn btn-success " })}
      {button({ name: "edit", number: 1, boot: "btn btn-secondary" })}
      {button({ name: "delete", number: 1, boot: "btn btn-danger" })}
    </div>
  </div>
);

ReactDOM.render(footer, document.getElementById("root"));
