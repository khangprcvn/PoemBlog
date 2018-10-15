import React from 'react';
import '../assets/css/style.default.css';
const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer__block">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <h4 className="h5">Client zone</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="client-register.html">Login or Register</a>
                </li>
                <li>
                  <a href="client-dashboard.html">Dashboard</a>
                </li>
                <li>
                  <a href="client-applicants.html">Writer</a>
                </li>
                <li>
                  <a href="client-job.html">Post a new poem</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <h4 className="h5">Let's be Friends</h4>
              <p className="social">
                <a
                  data-animate-hover="pulse"
                  className="external facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  data-animate-hover="pulse"
                  className="external gplus"
                >
                  <i className="fab fa-google-plus"></i>
                </a>
                <a
                  data-animate-hover="pulse"
                  className="external twitter"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a data-animate-hover="pulse" className="email">
                  <i className="far fa-envelope" />
                </a>
              </p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5">
              <h4 className="h5">News and Updates</h4>
              <p>
                Sign up to get weekly portion of fresh poems and news from us.
              </p>
              <form className="footer__newsletter">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    aria-describedby="emailAddress"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button
                      id="emailAddress"
                      type="button"
                      className="btn btn-default input-group-text"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
