import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";

function Employee(props) {
  const [UserList, setUserList] = useState([]);

  Axios.get("https://reqres.in/api/users").then((res) => {
    setUserList(res.data.data);
    console.log("aa", UserList);
  })
  .catch((err) => {
    console.log(err.message);
  });

  return (
    <div className={`App `}>
      <Header />

      <div className="container">
        <div>
          <h1 className="employee mt-4 mb-4"> - : Users List : - </h1>
        </div>
        <div className="cards">
          <table class="table table-striped border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {UserList.map((user) => {
                return (
                  <tr className="tab">
                    <td>{user.id}</td>
                    <td>
                      <img
                        style={{ width: "60px", height: "60px" }}
                        src={user.avatar}
                      ></img>
                    </td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee;
