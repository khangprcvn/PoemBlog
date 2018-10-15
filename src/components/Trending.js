import React from 'react';
import logo from '../assets/img/hot_poem.png';
const Trending = () => (
  <section>
    <div className="container">
      <h4 className="heading">Các thể loại thơ nổi bật</h4>
      <div className="job-listing job-listing--featured ">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="LoremIpsum " className="img-fluid" />
              </div>
              <div className="col-10">
                <h4 className="job__title">
                  <a href="detail.html">Tình yêu</a>
                </h4>
                {/* <p className="job__company">LoremIpsum</p> */}
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-2 ml-auto">
            <i className="fa fa-heart" /> 14000 lượt xem
          </div>
          <div className="col-10 col-md-3 col-lg-3 ml-auto">
            <p>Posted 5 days ago</p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-1">
            <div className="job__star">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Save to favourites"
                className="job__star__link"
              >
                <i className="fa fa-star" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing  ">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="Bootstrapious " className="img-fluid" />
              </div>
              <div className="col-10">
                <h4 className="job__title">
                  <a href="detail.html">Cách mạng</a>
                </h4>
                {/* <p className="job__company">Bootstrapious</p> */}
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-2 ml-auto">
            <i className="fa fa-heart" /> 13000 lượt xem
          </div>
          <div className="col-10 col-md-3 col-lg-3 ml-auto">
            <p>Posted 10 days ago</p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-1">
            <div className="job__star">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Save to favourites"
                className="job__star__link"
              >
                <i className="fa fa-star" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="Ipsioou " className="img-fluid" />
              </div>
              <div className="col-10">
                <h4 className="job__title">
                  <a href="detail.html">Học sinh</a>
                </h4>
                {/* <p className="job__company">Ipsioou</p> */}
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-2 ml-auto">
            <i className="fa fa-heart" /> {' '} 11000 lượt xem
          </div>
          <div className="col-10 col-md-3 col-lg-3 ml-auto">
            <p>Posted 5 days ago</p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-1">
            <div className="job__star">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Save to favourites"
                className="job__star__link"
              >
                <i className="fa fa-star" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="Ipsioou " className="img-fluid" />
              </div>
              <div className="col-10">
                <h4 className="job__title">
                  <a href="detail.html">Quê hương</a>
                </h4>
                {/* <p className="job__company">Ipsioou</p> */}
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-2 ml-auto">
            <i className="fa fa-heart" /> {' '} 11000 lượt xem
          </div>
          <div className="col-10 col-md-3 col-lg-3 ml-auto">
            <p>Posted 5 days ago</p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-1">
            <div className="job__star">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Save to favourites"
                className="job__star__link"
              >
                <i className="fa fa-star" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Trending;
