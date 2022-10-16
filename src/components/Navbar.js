import React from "react";
import brandLogo from "../asset/brandLogo.svg";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light px-5">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="/">
            <img src={brandLogo} alt="brand-logo" className="nav__logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav mr-auto gap-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Menu 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Menu 2
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Menu 3
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Menu 4
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Menu 5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
