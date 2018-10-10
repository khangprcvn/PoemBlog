import React, { Component } from 'react';
import HeaderWriter from '../containers/Header_writer';
import MainListWriter from '../containers/Main_list_writer';
import Footer from './Footer';
class ListWriter extends Component {
  render() {
    return (
      <div>
        <HeaderWriter />
        <MainListWriter />
        <Footer />
      </div>
    );
  }
}

export default ListWriter;
