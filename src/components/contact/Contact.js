import React from 'react';
import Contact_Information from './Contact_Information.jsx';
import Contact_Form from './Contact_Form';
import Home from './../Home';
class Contact extends React.Component{
    render(){
        return(
            <div>
                <Home />
                <Contact_Information />
                <Contact_Form />
            </div>
        );
    }
}
export default Contact;