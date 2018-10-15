import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="box">
                    <h3 className="heading">Login</h3>
                    <p className="lead">Already our customer?</p>
                    <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <hr />
                    <form action="https://demo.bootstrapious.com/jobs/2-0-1/client-dashboard.html" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="form-control" />
                        </div>
                    </form>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-white-primary"><i className="fa fa-sign-in" /> Log in</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;
