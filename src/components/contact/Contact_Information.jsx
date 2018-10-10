import React from 'react';
import { Link } from 'react-router-dom';
class Contact_Information extends React.Component{
    render(){
        return(
            <div>
                <section className="bg-light-gray">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb d-flex justify-content-center">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li aria-current="page" className="breadcrumb-item active">Contact</li>
                            </ul>
                        </nav>
                        <h1 className="heading">Contact</h1>
                        <p className="lead text-center">
                        Trường Đại học Bách khoa là một trường đại học đa ngành về khối ngành kỹ thuật tại Việt Nam, là thành viên của hệ thống Đại học Quốc gia, 
                        được xếp vào nhóm trường đại học trọng điểm quốc gia Việt Nam.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>
                <section>  
                    <div id="contact" className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="box-simple">
                            <div className="icon"><i className="fa fa-map-marker" /></div>
                            <h3 className="mb-4">Address</h3>
                            <p>Bach Khoa University<br />268 Ly Thuong Kiet St., Dist.10, Ho Chi Minh City, Vietnam<br /><strong>Viet Nam</strong></p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="box-simple">
                            <div className="icon"><i className="fa fa-phone" /></div>
                            <h3 className="mb-4">Call center</h3>
                            <p className="text-muted">Phòng đào tạo</p>
                            <p><strong>(02) 838 654 087</strong></p>
                            <p><strong>Số Fax: (02) 838 637 002</strong></p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="box-simple">
                            <div className="icon"><i className="fa fa-envelope" /></div>
                            <h3 className="mb-4">Electronic support</h3>
                            <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                            <ul className="list-unstyled">
                            <li><strong><a href="mailto:">pdt@hcmut.edu.vn</a></strong></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>


        );
    }
}
export default Contact_Information;