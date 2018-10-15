import React from 'react';
import love_bg from '../assets/img/love_bg.jpg';
class Poem extends React.Component {
    render() {
        var {poem} = this.props;
        console.log(poem);
        return (
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="box-image-text full-height">
                    <div className="top">
                        <a href="detail.html">
                            <div className="image">
                                <img
                                    src={poem.picture}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="bg" />
                            <div className="logo">
                                <img
                                    src="../assets/img/company-3.png"
                                    alt=""
                                    style={{ maxWidth: "80px" }}
                                />
                            </div>
                        </a>
                    </div>
                    <div className="content">
                        <h5>
                            <a href="detail.html">
                                {poem.type}
                                {/* Cách mạng */}
                            </a>
                        </h5>
                        <p className="featured__details">
                            {' '}
                            {/* <i className="fa fa-map-marker job__location" /> */}
                            {/* Tố Hữu, Nguyễn Đình Thi, ... */}
                            {poem.author}
                {/* <span className="badge featured-badge badge-success">
                  Full Time
                </span> */}
                        </p>
                        <p>
                            {/* Điền vào ,...{' '} */}
                            {poem.desc}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Poem;