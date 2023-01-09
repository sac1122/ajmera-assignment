import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function (props) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        first_name: first_name,
        last_name: last_name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
        setMessage("User created successfully");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPopup(true);
        console.log(message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={`App  `}>
      <Header />

      <div>
        {popup && (
          <div>
            {" "}
            <p className="alert-popup">
              {message}{" "}
              <a href="#" onClick={() => setPopup(false)}>
                x
              </a>
            </p>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h2 className="title3 mt-5 mb-5">Add New User</h2>
            <form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Fill The Details</h3>
                <div className="form-group mt-3">
                  <label className="required-field">First Name</label>
                  <input
                    type="first_name"
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                    value={first_name}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="required-field">Last Name</label>
                  <input
                    type="last_name"
                    className="form-control mt-1"
                    placeholder="Enter Last Name"
                    value={last_name}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="required-field">Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button data-testid="btn" type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
