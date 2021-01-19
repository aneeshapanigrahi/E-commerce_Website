import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
class DeleteAll extends React.Component {
  state = { status: "" };
  handleClick = () => {
    console.log("i got clicked");
    Axios.delete("http://localhost:8000/admin/deleteAll")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    this.setState({ status: "Successfully deleted all products." });
  };
  render() {
    return (
      <div
        style={{
          margin: " 50px auto 50px auto",
          boxShadow: "1px 1px 50px 0 rgba(0, 0, 0, 0.3)",
          maxWidth: "800px", backgroundColor: 'rgb(157, 186, 238)', textAlign: 'center', padding: '20px 30px 0px 30px'
        }}
      >
        <h1>
          <strong>
            Are you sure you want to delete all items?
          </strong>
        </h1>
        <button
          onClick={this.handleClick}
          style={{ marginTop: "50px" }}
          className="btn btn-danger"
        >
          <h2>Yes, I am.</h2>
        </button>
        <Link to="/admin/customizeProducts">
          <button
            style={{ marginLeft: "50px", marginTop: "50px" }}
            className="btn btn-success"
          >
            <h2> No, go back</h2>
          </button>
        </Link>
        <h1
          style={{
            color: "Green",
            marginTop: "80px",
            fontWeight: "700",
            fontSize: "3rem",
          }}
        >
          {this.state.status}
        </h1>
      </div>
    );
  }
}
export default DeleteAll;
