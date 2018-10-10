import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import LogoSmall from '../assets/img/logo-small.png';
import LogoCompany from '../assets/img/company-1.png';
const HeaderWriter = () => (
  <div>
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="index-2.html" className="navbar-brand">
              <img
                src={Logo}
                alt="logo"
                className="d-none d-lg-block"
              />
              <img
                src={LogoSmall}
                alt="logo"
                className="d-block d-lg-none"
              />
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
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About Us
                </a>
              </li> */}
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
                  <a href="index-2.html" className="dropdown-item">
                    Home
                  </a>
                  <a href="category.html" className="dropdown-item">
                    Job Listing
                  </a>
                  <a href="detail.html" className="dropdown-item">
                    Job Detail{' '}
                  </a>
                  <a href="about.html" className="dropdown-item">
                    About{' '}
                  </a>
                  <a href="contact.html" className="dropdown-item">
                    Contact{' '}
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog Listing{' '}
                  </a>
                  <a href="post.html" className="dropdown-item">
                    Blog Post{' '}
                  </a>
                  <a href="packages.html" className="dropdown-item">
                    Pricing packages{' '}
                  </a>
                  <a href="testimonials.html" className="dropdown-item">
                    Testimonials{' '}
                  </a>
                  <a href="text.html" className="dropdown-item">
                    Text Page{' '}
                  </a>
                  <a href="faq.html" className="dropdown-item">
                    FAQ
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {' '}
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                    id="clientZone"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle has-img mb-3 mb-lg-0 mt-3 mt-lg-0"
                  >
                    <div className="client-menu-image">
                      <div className="inner">
                        <img
                          src={LogoCompany}
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    Logged Client
                  </a>
                <div aria-labelledby="clientZone" className="dropdown-menu">
                  <a href="client-register.html" className="dropdown-item">
                    Login or Register
                  </a>
                  <a href="client-dashboard.html" className="dropdown-item">
                    Dashboard
                  </a>
                  <a href="client-applicants.html" className="dropdown-item">
                    Applicants{' '}
                  </a>
                  <a href="client-job.html" className="dropdown-item">
                    Post a new job{' '}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Writer
                </li>
              </ul>
            </nav>
            <h1 className="heading">
              <span className="accent">Các Tác Giả</span>
            </h1>
            <p className="lead text-center">
              Bên dưới là các giả và các thông tin liên quan
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HeaderWriter;
