import React from 'react';
import Contact_Information from './Contact_Information.jsx';
import Contact_Form from './Contact_Form';
import Header from '../Header';
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Contact_Information />
        <Contact_Form />
      </div>
    );
  }
}
export default Contact;
