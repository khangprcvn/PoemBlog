import React from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Header from './../Header';
import Footer from './../Footer';
import { Link } from 'react-router-dom';
class Login_Signup extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section className="bg-light-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb d-flex justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to="">Home</Link>
                                        </li>
                                        <li aria-current="page" className="breadcrumb-item active">Login or register</li>
                                    </ul>
                                </nav>
                                <h1 className="heading">Log in or Sign up</h1>
                                <p className="lead text-center">This is the lead paragraph of the article. Pellentesque habitant morbi tristique.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <Login />
                            <SignUp />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        );
    }
}
export default Login_Signup;
