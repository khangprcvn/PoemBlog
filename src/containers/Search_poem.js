import React from 'react';

const SearchPoem = () => (
  <section className="job-form-section job-form-section--compressed">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb d-flex justify-content-center">
          <li className="breadcrumb-item">
            <a href="index-2.html">Home</a>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            List Poem
          </li>
        </ul>
      </nav>
      <h4 className="heading">
        Find a <span className="accent">poem </span> you {' '}
        <span className="accent">love</span>
      </h4>
      <form id="job-main-form" method="get" action="#" className="job-main-form">
        <div className="controls">
          <div className="row align-items-end">
            <div className="col-sm-1 col-lg-2" />
            <div className="col-sm-5 col-lg-4 form-group">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="profession"
                name="profession"
                // placeholder="Title you are looking for"
                className="form-control"
              />
            </div>
            <div className="col-sm-5 col-lg-4 form-group">
              <label htmlFor="Writer">Writer</label>
              <input
                type="text"
                id="location"
                name="location"
                // placeholder="Any particular location?"
                className="form-control"
              />
            </div>
            <div className="col-sm-1 col-lg-2 form-group">
              <button
                type="submit"
                name="name"
                className="btn btn-outline-white-primary job-main-form__button"
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default SearchPoem;
