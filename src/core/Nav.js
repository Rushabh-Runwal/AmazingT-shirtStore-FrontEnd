import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#17a2b8" };
  } else {
    return { color: "#fff" };
  }
};

const Nav = ({ history }) => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand mr-5" href="/">
        AMAZING TSHIRT STORE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link
            style={currentTab(history, "/")}
            className="nav-link mx-md-4"
            to="/"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-house"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            Home
          </Link>
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link mx-md-4"
            to="/cart"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cart3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            Cart
          </Link>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link mx-md-4"
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link mx-md-4"
              to="/admin/dashboard"
            >
              Admin Dashboard
            </Link>
          )}
          <Link
            style={currentTab(history, "/contact")}
            className="nav-link mx-md-4"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            style={currentTab(history, "/about")}
            className="nav-link mx-md-4"
            to="/about"
          >
            About Us
          </Link>
          {!isAuthenticated() && (
            <Fragment>
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link mx-md-4 text-success"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link mx-md-4 text-success"
                to="/signin"
              >
                Sign In
              </Link>
            </Fragment>
          )}
          {isAuthenticated() && (
            <span
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
              className="nav-link text-warning"
            >
              Sign Out
            </span>
          )}
        </div>
      </div>
    </div>
  </nav>
  // <div>
  //   <ul className="nav nav-tabs bg-dark">
  //     <li className="nav-item">
  // <Link style={currentTab(history, "/")} className="nav-link" to="/">
  //   Home
  // </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link
  //         style={currentTab(history, "/cart")}
  //         className="nav-link"
  //         to="/cart"
  //       >
  //         Cart
  //       </Link>
  //     </li>
  // {isAuthenticated() && isAuthenticated().user.role === 0 && (
  //   <li className="nav-item">
  //     <Link
  //       style={currentTab(history, "/user/dashboard")}
  //       className="nav-link"
  //       to="/user/dashboard"
  //     >
  //       User Dashboard
  //     </Link>
  //   </li>
  // )}
  // {isAuthenticated() && isAuthenticated().user.role === 1 && (
  //   <li className="nav-item">
  //     <Link
  //       style={currentTab(history, "/admin/dashboard")}
  //       className="nav-link"
  //       to="/admin/dashboard"
  //     >
  //       Admin Dashboard
  //     </Link>
  //   </li>
  // )}
  // {!isAuthenticated() && (
  //   <Fragment>
  //     <li className="nav-item">
  //       <Link
  //         style={currentTab(history, "/signup")}
  //         className="nav-link"
  //         to="/signup"
  //       >
  //         Sign Up
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link
  //         style={currentTab(history, "/signin")}
  //         className="nav-link"
  //         to="/signin"
  //       >
  //         Sign In
  //       </Link>
  //     </li>
  //   </Fragment>
  // )}
  // <li className="nav-item">
  //   {isAuthenticated() && (
  //     <span
  //       onClick={() => {
  //         signout(() => {
  //           history.push("/");
  //         });
  //       }}
  //       className="nav-link text-warning"
  //     >
  //       Sign Out
  //     </span>
  //   )}
  //     </li>
  //   </ul>
  // </div>
);

export default withRouter(Nav);
