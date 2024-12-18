import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <>
        <nav
          className="navbar navbar-expand-lg  bg-body-tertiary "
          data-bs-theme={props.mode}
        >
          <div className="container-fluid mx-4 ">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-3 ">
                <li className="nav-item active">
                  <a className="nav-link " aria-current="page" href="#">
                    {props.home}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {props.about}
                  </a>
                </li>
              </ul>

              <div className={"form-check form-switch "}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggle}
                />
                <label
                  className="form-check-label"
                  forhtml="flexSwitchCheckDefault"
                >
                  Theme
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Enter a title here",
  about: "Enter about here",
  home: "Home Section",
};
