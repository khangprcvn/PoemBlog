import React from 'react';
import '../assets/css/style.default.css';
const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer__block">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-5">
              <h4 className="h5">About Jobs</h4>
              <p>
                Jobs is a <strong>Bootstrap 3 jobs board theme </strong>{' '}
                developed in the middle of Europe by{' '}
                <a href="http://ondrejsvestka.cz/">Ondrej Svestka</a>
              </p>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                magna. Cras in mi at felis aliquet congue.{' '}
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <h4 className="h5">This Theme</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <a href="category.html">Jobs Listing</a>
                </li>
                <li>
                  <a href="detail.html">Job detail</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="blog.html">Blog listing</a>
                </li>
                <li>
                  <a href="post.html">Blog Post</a>
                </li>
                <li>
                  <a href="packages.html">Pricing packages</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="text.html">Text page</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="h5">Our offices</h4>
              <h5>London</h5>
              <p>
                {' '}
                Donec eleifend
                <br />
                libero at sagittis
                <br />
                mollis + 44 2556 789 8799
              </p>
              <h5>Paris</h5>
              <p>
                {' '}
                Donec eleifend
                <br />
                libero at sagittis
                <br />
                mollis + 41 2556 789 8799
              </p>
            </div>
          </div>
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
                  <a href="client-applicants.html">Applicants</a>
                </li>
                <li>
                  <a href="client-job.html">Post a new job</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <h4 className="h5">Let's be Friends</h4>
              <p className="social">
                <a
                  href="#"
                  data-animate-hover="pulse"
                  className="external facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="#"
                  data-animate-hover="pulse"
                  className="external gplus"
                >
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  href="#"
                  data-animate-hover="pulse"
                  className="external twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" data-animate-hover="pulse" className="email">
                  <i className="fa fa-envelope" />
                </a>
              </p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5">
              <h4 className="h5">News and Updates</h4>
              <p>
                Sign up to get weekly portion of fresh jobs and news from us.
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
                      <i className="fa fa-send" />
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
