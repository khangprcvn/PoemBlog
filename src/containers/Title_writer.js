import React from 'react';
import { Link } from 'react-router-dom';
const TitleWriter = () => (
  <div>
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

export default TitleWriter;
