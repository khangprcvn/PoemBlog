import React from 'react';
import avarta from '../assets/img/wt1.png';
import { connect } from 'react-redux';

class Writer extends React.Component {
  render() {
    return this.props.data.writer.map(data => (
      <div className="col-lg-6" key={data.id}>
        <div className="box applicant">
          <h4>{data.name}</h4>
          <a
            data-toggle="modal"
            data-target="#coverletter-modal"
            className="btn btn-outline-white-secondary btn-sm"
          >
            <i className="fa fa-file-text-o" />
            See Detail
          </a>
          <a
            data-toggle="modal"
            data-target="#contact-modal"
            className="btn btn-outline-white-secondary btn-sm"
          >
            <i className="fa fa-envelope" />
            Contact{' '}
          </a>
          <a className="btn btn-outline-white-secondary btn-sm">
            {' '}
            <i className="fa fa-archive" />
            archive
          </a>
          <p>
            <span className="badge badge-info">Tham gia:05/08/2018</span>{' '}
            <span className="badge badge-success">Bài gần nhất: 06/09/2018</span>
          </p>
          <div className="d-flex justify-content-between">
            <p className="intro">Thể loại : {data.category}</p>
            <div className="image">
              <img src={avarta} alt="" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
        <div
          id="coverletter-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          className="modal fade"
        >
          <div role="document" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Demo Detail
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </h4>
              </div>
              <div className="modal-body">
                <p>
                  Here could be the applicant's cover letter. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                  ultricies eget, tempor sit amet, ante. Donec eu libero sit
                  amet quam egestas semper. Aenean ultricies mi vitae est.
                  Mauris placerat eleifend leo. Quisque sit amet est et sapien
                  ullamcorper pharetra.{' '}
                </p>
                <p>
                  Donec eu libero sit amet quam egestas semper. Aenean ultricies
                  mi vitae est. Mauris placerat eleifend leo. Quisque sit amet
                  est et sapien ullamcorper pharetra.{' '}
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo. Quisque sit amet est et
                  sapien ullamcorper pharetra.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

const mapDataWriterToProps = state => ({
  data: state.Page
});
export default connect(mapDataWriterToProps)(Writer);
