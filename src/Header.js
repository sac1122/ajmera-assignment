import "./App.css";
import { useEffect, useState } from "react";

function Header(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <nav className="navbar navbar-expand-lg navbar-light light1">
        <a className="navbar-brand" href="#">
          <img className="image2" src="./images.png" alt="wrong Url"></img>{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse space-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                UserList <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                Add User
              </a>
            </li>
          </ul>
          <button className="toggle-btn" onClick={toggleTheme}>Change Theme</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
