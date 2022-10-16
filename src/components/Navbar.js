import React from "react";
import brandLogo from "../asset/brandLogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={brandLogo} alt="brand-logo" className="nav__logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Menu 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Menu 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Menu 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Menu 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Menu 5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
