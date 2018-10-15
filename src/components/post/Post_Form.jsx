import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/Page';
class Post_Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            type : 0,
            author : '',
            desc : '',
            picture : '',
            content : '',
        }
    }
    onChange = (event) => {
        //console.log(event.target.value);
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddPoem(this.state);
        //console.log(this.state);
    }
    render() {
        return (
            <div>
                <section className="bg-light-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb d-flex justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to="">Home</Link>
                                        </li>
                                        <li aria-current="page" className="breadcrumb-item active">Đăng thơ</li>
                                    </ul>
                                </nav>
                                <h1 className="heading">ĐĂNG THƠ</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <form onSubmit={this.onSubmitForm} className="job-add-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4>Chi tiết bài thơ</h4>
                                            <p className="text-muted text-small"></p>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="title">Tên bài thơ</label>
                                            <input type="text" className="form-control" 
                                                name="name"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="type">Thể loại</label>
                                            <select value={this.state.type} placeholder="Choose job type" className="form-control select2"
                                                name="type"
                                                onChange={this.onChange}
                                            >
                                                <option value={0}>Tình yêu</option>
                                                <option value={1}>Cách mạng</option>
                                                <option value={2}>Đường luật</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="title">Tác giả</label>
                                            <input name="author" type="text" className="form-control" 
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="text">Mô tả</label>
                                            <textarea rows={2} className="form-control"
                                                name="desc"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="title">Ảnh đính kèm</label>
                                            <input type="text" className="form-control" 
                                                name="picture"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="text">Nội dung bài thơ</label>
                                            <textarea rows={8} className="form-control" 
                                                name="content"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <hr />
                                            <button type="submit" className="btn btn-outline-white-primary"> <i className="fa fa-magic" /> Lưu
                                            
                                            </button>
                                            {/* <button type="submit" className="btn btn-outline-white-secondary"> <i className="fa fa-save" /> Save draft</button> */}
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddPoem: (poem) => {
            dispatch(actions.addPoem(poem));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Post_Form);
