import React from 'react';
class Login_Modal extends React.Component {
    render() {
        
        return (
            <div id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade">
                <div role="document" className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 id="exampleModalLabel" className="modal-title">Customer Login</h4>
                            <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <form action="https://demo.bootstrapious.com/jobs/2-0-1/customer-orders.html" method="post">
                                <div className="form-group">
                                    <input id="email_modal" type="text" placeholder="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input id="password_modal" type="password" placeholder="password" className="form-control" />
                                </div>
                                <p className="text-center">
                                    <button type="button" className="btn btn-outline-white-primary"><i className="fa fa-sign-in" /> Log in</button>
                                </p>
                            </form>
                            <p className="text-center text-muted">Not registered yet?</p>
                            <p className="text-center text-muted"><a href="client-register.html"><strong>Register now</strong></a>! It is
          easy and done in 1 minute and gives you access to special discounts and much more!</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Login_Modal;
