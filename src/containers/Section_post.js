import React from 'react';
import {Link} from 'react-router-dom';
const SectionPost = () => (
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
                Add a new poem
              </li>
            </ul>
          </nav>
          <h1 className="heading">Add a new poem</h1>
        </div>
      </div>
    </div>
  </section>
);

export default SectionPost;