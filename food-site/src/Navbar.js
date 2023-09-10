import React from "react";
function Navbar() {
  return (
    <>
      {/* Navbar Section*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <u>
            <i className="navbar-brand fas fa-drumstick-bite"> Food Town</i>
          </u>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Foods
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-center" href="#breakfast-products">
                      <b>Breakfast</b>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#lunch-products">
                      <b>Lunch</b>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#Checkout-Side">
                      <b>Checkout</b>
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link active end" href="#Contact-Side">
                Contact Us
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
