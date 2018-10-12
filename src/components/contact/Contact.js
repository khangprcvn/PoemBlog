import React from 'react';
import Information from './Information';
import Form from './Form.js';
import Header from '../Header';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Information />
        <Form /> 
      </div>
    );
  }
}
