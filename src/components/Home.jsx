import React, { Component } from 'react';
import '../assets/css/style.default.css';
import logo from '../assets/img/logo.png';
import logo_small from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="index-2.html" className="navbar-brand">
              <img
                src={logo}
                width="200px"
                height="80px"
                alt="logo"
                className="d-none d-lg-block"
              />
              <img src={logo_small} alt="logo" className="d-block d-lg-none" />
              <span className="sr-only">Go to homepage</span>
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              Menu
              <i className="fa fa-bars" />
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    id="clientZone"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                  >
                    Client Zone
                  </a>
                  <div aria-labelledby="clientZone" className="dropdown-menu">
                    <a href="client-register.html" className="dropdown-item">
                      Login or Register
                    </a>
                    <a href="client-dashboard.html" className="dropdown-item">
                      Dashboard
                    </a>
                    <Link to="/list" className="dropdown-item">
                      Writter
                    </Link>
                    <a href="client-job.html" className="dropdown-item">
                      Post a new job
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    id="pages"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                  >
                    Pages
                  </a>
                  <div aria-labelledby="pages" className="dropdown-menu">
                    <a href="index.html" className="dropdown-item">
                      Home
                    </a>
                    <a href="contact.html" className="dropdown-item">
                      Contact
                    </a>
                    <a href="blog.html" className="dropdown-item">
                      Blog Listing
                    </a>
                    <a href="post.html" className="dropdown-item">
                      Blog Post
                    </a>
                    <a href="faq.html" className="dropdown-item">
                      FAQ
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#loginModal"
                    data-toggle="modal"
                    className="btn navbar-btn btn-outline-light mb-5 mb-lg-0"
                  >
                    <i className="fa fa-sign-in" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
