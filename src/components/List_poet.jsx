import React, { Component } from 'react';
import Poet from './Poet';
import '../assets/css/List_poet.css';
class ListPoet extends Component {
  render() {
    return (
      <div className="poet">
        <Poet />
      </div>
    );
  }
}

export default ListPoet;
