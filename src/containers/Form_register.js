import React from 'react';
import '../assets/css/style.default.css';

export default class FormRegister extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb d-flex justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Login or register
                    </li>
                  </ul>
                </nav>
                <h1 className="heading">Log in or Sign up</h1>
                <p className="lead text-center">
                  This is the lead paragraph of the article. Pellentesque
                  habitant morbi tristique.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="box">
                  <h3 className="heading">New account</h3>
                  <p className="lead">Not our registered customer yet?</p>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                  <p className="text-muted">
                    If you have any questions, please feel free to{' '}
                    <a href="contact.html">contact us</a>, our customer service
                    center is working for you 24/7.
                  </p>
                  <hr />
                  <form
                    action="https://demo.bootstrapious.com/jobs/2-0-1/client-dashboard.html"
                    method="post"
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email1">Email</label>
                      <input id="email1" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password1"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-white-primary"
                      >
                        <i className="fa fa-user-md" /> Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <h3 className="heading">Login</h3>
                  <p className="lead">Already our customer?</p>
                  <p className="text-muted">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                  <hr />
                  <form
                    action="https://demo.bootstrapious.com/jobs/2-0-1/client-dashboard.html"
                    method="post"
                  >
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="text" className="form-control" />
                    </div>
                  </form>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-white-primary">
                      <i className="fa fa-sign-in" /> Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
