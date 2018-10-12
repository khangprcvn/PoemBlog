import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../assets/css/style.default.css';

class FormPost extends React.Component {

  // onSubmit = values => {
  //   // console.log(window.location);
  //   // console.log(values);
  // } 

  render() {
    const {handleSubmit} = this.props;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form
                id="job-main-form"
                className="job-add-form"
                onSubmit={handleSubmit(this.props.onSubmit)}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Poem details</h4>
                    <p className="text-muted text-small">
                      Dưới đây là form của các thông tin của một bài thơ , phải
                      điền đầy đủ các thông tin. Nội dung thơ phải phừ hợp.{' '}
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="title">Tiêu Đề Thơ</label>
                    <Field
                      name="title"
                      type="text"
                      component="input"
                      className="form-control"
                    />
                    <p className="help-block text-small">
                      Tiêu đề phải phù hợp.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="text">Nội Dung Thơ</label>
                    <Field
                      id="advance"
                      name="main"
                      rows="5"
                      component="input"
                      className="form-control"
                    />
                    <p className="help-block text-small" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="type">Hình Thức Thơ</label>
                    <Field
                      component="select"
                      name="type"
                      placeholder="Choose job type"
                      className="form-control select2"
                    >
                      <option>Lục Bát</option>
                      <option>Tự Do</option>
                    </Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="type">Thể Loại</label>
                    <select
                      name="category"
                      component="select"
                      placeholder="Choose job type"
                      className="form-control select2"
                    >
                      <option>Tình yêu</option>
                      <option>Cách mạng</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <hr className="margin-bottom--big" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Tác giả</h4>
                    <p className="text-muted text-small">. </p>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="company_name">Họ và tên</label>
                    <Field
                      name="writer"
                      type="text"
                      className="form-control"
                      component="input"
                    />
                    <p className="help-block text-small" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="company_name">Một số mô tả</label>
                    <Field
                      name="description"
                      component="input"
                      rows="3"
                      className="form-control"
                    />
                    <p className="help-block text-small" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="company_website">Địa chỉ</label>
                    <Field
                      component="input"
                      name="address"
                      rows = "3"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <hr />
                    <button
                      type="submit"
                      // onClick={() => <Redirect to="/" />}
                      className="btn btn-outline-white-primary"
                    >
                      {' '}
                      <i className="fa fa-magic" /> Save and publish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(FormPost);
