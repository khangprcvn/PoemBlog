import React from 'react';
import data_writer from '../data/data_writer';
import avarta from '../assets/img/wt1.png';
export default class Writer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.setState({ data: data_writer });
  }
  render() {
    return this.state.data.map(data => (
      <div className="col-lg-6">
        <div className="box applicant">
          <h4>{data.name}</h4>
          <a
            href="#"
            data-toggle="modal"
            data-target="#coverletter-modal"
            className="btn btn-outline-white-secondary btn-sm"
          >
            <i className="fa fa-file-text-o" />
            See Detail
          </a>
          <a
            href="#"
            data-toggle="modal"
            data-target="#contact-modal"
            className="btn btn-outline-white-secondary btn-sm"
          >
            <i className="fa fa-envelope" />
            Contact{' '}
          </a>
          <a href="#" className="btn btn-outline-white-secondary btn-sm">
            {' '}
            <i className="fa fa-archive" />
            archive
          </a>
          {/* <p>
                    <span className="badge badge-info">Applied 21/10/2017</span>{' '}
                    <span className="badge badge-success">
                      Contacted 30/12/2017
                    </span>
                  </p> */}
          <div className="d-flex justify-content-between">
            <p className="intro">Thể loại : {data.category}</p>
            <div className="image">
              <img src={avarta} alt="" className="img-fluid rounded-circle" />
            </div>
          </div>
          
        </div>
        <div
          id="coverletter-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          class="modal fade"
        >
          <div role="document" class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Demo Detail
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    class="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </h4>
              </div>
              <div class="modal-body">
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
