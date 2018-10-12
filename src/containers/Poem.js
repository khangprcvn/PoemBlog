import React from 'react';
import '../assets/css/style.default.css';
import logo from '../assets/img/blog2.jpg';
class Poem extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
        <h3 className="heading">We have found <span className="accent">40</span> poems</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="post">
                <div className="image">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
                <h4>
                  <a href="post.html">Education in the IT</a>
                </h4>
                <p className="post__intro">
                  ellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <p className="read-more">
                  <a href="post.html" className="btn btn-outline-white-primary">
                    Continue reading
                  </a>
                </p>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="post">
                <div className="image">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
                <h4>
                  <a href="post.html">Best books for personal development</a>
                </h4>
                <p className="post__intro">
                  ellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <p className="read-more">
                  <a href="post.html" className="btn btn-outline-white-primary">
                    Continue reading
                  </a>
                </p>
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="post">
                <div className="image">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
                <h4>
                  <a href="post.html">Best books for personal development</a>
                </h4>
                <p className="post__intro">
                  ellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <p className="read-more">
                  <a href="post.html" className="btn btn-outline-white-primary">
                    Continue reading
                  </a>
                </p>
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="post">
                <div className="image">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
                <h4>
                  <a href="post.html">Education in the IT</a>
                </h4>
                <p className="post__intro">
                  ellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <p className="read-more">
                  <a href="post.html" className="btn btn-outline-white-primary">
                    Continue reading
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}


export default Poem;