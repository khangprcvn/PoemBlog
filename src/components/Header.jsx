import React, { Component } from 'react';
import logo from '../assets/picture/icon_poem.png';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="title_header">
            <Link to="/" className="logo">
              <img src={logo} height="40px" alt="logo" width="40px" />
              <span>Poems</span>
            </Link>
            <Link to="/list_poet" className="infor_header">
              <span>Poets</span>
            </Link>
            <Link to="/test2" className="infor_header_2">
              <span>Categories</span>
            </Link>
          </div>
          <Link to="/test3" className="sign_up">
            <span>Sign Up</span>
          </Link>
          <Link to="/test4" className="log_in">
            <span>Log In</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
