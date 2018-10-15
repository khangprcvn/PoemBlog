import React, { Component } from 'react';
import '../assets/css/style.default.css';
import logo from '../assets/img/logo1.png';
import logo_small from '../assets/img/logo1.png';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  width="100px"
                  height="80px"
                  alt="logo"
                  className="d-none d-lg-block"
                />
                <img
                  src={logo_small}
                  alt="logo"
                  width="100px"
                  height="80px"
                  className="d-block d-lg-none"
                />
                <span className="sr-only">Go to homepage</span>
              </Link>
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
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Trang chủ <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      id="clientZone"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      Chức năng
                    </a>
                    <div aria-labelledby="clientZone" className="dropdown-menu">
                      <Link to="/register" className="dropdown-item">
                        Login or Register
                      </Link>
                      <Link to="/writers/page/1" className="dropdown-item">
                        Tác giả
                      </Link>
                      <Link to="/posts/new" className="dropdown-item">
                        Đăng thơ
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      id="pages"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      Chi tiết
                    </a>
                    <div aria-labelledby="pages" className="dropdown-menu">
                      {/* <a href="index.html" className="dropdown-item">
                      Home
                    </a>
                    <a href="contact.html" className="dropdown-item">
                      Contact
                    </a> */}
                      <Link to="/list/post" className="dropdown-item">
                        Blog Listing
                      </Link>
                      <a href="post.html" className="dropdown-item">
                        Blog Post
                      </a>
                      <a href="faq.html" className="dropdown-item">
                        FAQ
                      </a>
                    </div>
                  </li>
                  {/* <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About Us
                  </a>
                </li> */}
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Liên hệ <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#loginModal"
                      data-toggle="modal"
                      className="btn navbar-btn btn-outline-light mb-5 mb-lg-0"
                    >
                      <i className="fa fa-sign-in" />
                      Log In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          className="modal fade"
        >
          <div role="document" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 id="exampleModalLabel" className="modal-title">
                  Customer Login
                </h4>
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input
                      id="email_modal"
                      type="text"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password_modal"
                      type="text"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <p className="text-center">
                    <button type="button" className="btn btn-outline-white-primary">
                      <i className="fa fa-sign-in" /> Log in
                    </button>
                  </p>
                </form>
                <p className="text-center text-muted">Not registered yet?</p>
                <p className="text-center text-muted">
                  <a href="/register">
                    <strong>Register now</strong>
                  </a>
                  ! It is easy and done in 1 minute and gives you access to
                  special discounts and much more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
