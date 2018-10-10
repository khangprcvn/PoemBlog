import React from 'react';
import love_bg from '../assets/img/love_bg.jpg';
import cm_bg from '../assets/img/cm_bg.jpg';
const SectionHome = () => (
  <section className="bg-light-gray">
    <div className="container">
      <h3 className="heading">Thể loại được xem nhiều</h3>
      <div className="row featured align-items-stretch">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="box-image-text full-height">
            <div className="top">
              <a href="detail.html">
                <div className="image">
                  <img
                    src={love_bg}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="bg" />
                <div className="logo">
                  <img
                    src="../assets/img/company-1.png"
                    alt=""
                    style={{maxWidth: "80px"}}
                  />
                </div>
              </a>
            </div>
            <div className="content">
              <h5>
                <a href="detail.html">Tình yêu</a>
              </h5>
              <p className="featured__details">
                {' '}
                {/* <i className="fa fa-map-marker job__location" /> */}
                Xuân Diệu , Hàn Mặc Tử,...
                {/* <span className="badge featured-badge badge-success">
                  Full Time
                </span> */}
              </p>
              <p>
                Điền vào ,...
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="box-image-text full-height">
            <div className="top">
              <a href="detail.html">
                <div className="image">
                  <img
                    src={love_bg}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="bg" />
                <div className="logo">
                  <img
                    src="../assets/img/company-3.png"
                    alt=""
                    style={{maxWidth: "80px"}}
                  />
                </div>
              </a>
            </div>
            <div className="content">
              <h5>
                <a href="detail.html">Cách mạng</a>
              </h5>
              <p className="featured__details">
                {' '}
                {/* <i className="fa fa-map-marker job__location" /> */}
                Tố Hữu, Nguyễn Đình Thi, ...
                {/* <span className="badge featured-badge badge-success">
                  Full Time
                </span> */}
              </p>
              <p>
                Điền vào ,...{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="box-image-text  full-height">
            <div className="top">
              <a href="detail.html">
                <div className="image">
                  <img
                    src={love_bg}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="bg" />
                <div className="logo">
                  <img
                    // src={cm_bg}
                    alt=""
                    style={{maxWidth: "80px"}}
                  />
                </div>
              </a>
            </div>
            <div className="content">
              <h5>
                <a href="detail.html">Đường Luật</a>
              </h5>
              <p className="featured__details">
                {' '}
                {/* <i className="fa fa-map-marker job__location" /> */}
                Bà Huyện Thanh Quan, ...
                {/* <span className="badge featured-badge badge-dark">Part Time</span> */}
              </p>
              <p>
                Điền vào, ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionHome;