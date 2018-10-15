import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="box">
                    <h3 className="heading">New account</h3>
                    <p className="lead">Not our registered customer yet?</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                    <hr />
                    <form action="https://demo.bootstrapious.com/jobs/2-0-1/client-dashboard.html" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email1">Email</label>
                            <input id="email1" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-white-primary"><i className="fa fa-user-md" /> Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;
