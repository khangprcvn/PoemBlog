import React from 'react';
import data from '../data/data_writer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PageAction from '../actions/Page';

class Page extends React.Component {
  createPage = () => {
    let page = [];

    for (let i = 1; i <= data.length; i++) {
      let link = `/writers/page/${i}`;
      page.push(
        <Link
          to={link}
          className="page-link"
          key={i}
          onClick={() => this.clickPage(i)}
        >
          {i}
        </Link>
      );
    }
    return page;
  };

  clickPage = i => this.props.dispatch(PageAction(i));

  render() {
    return (
      <div className="col-lg-12">
        <div className="pages">
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-4 mb-4"
          >
            <ul className="pagination">
              <li className="page-item">
                <a aria-label="Previous" className="page-link">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active" />

              {this.createPage()}
              <li className="page-item">
                <a aria-label="Next" className="page-link">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default connect()(Page);
