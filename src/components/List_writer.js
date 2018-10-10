import React, { Component } from 'react';
import TitlleWriter from '../containers/Title_writer';
import Header from './Header';
import MainListWriter from '../containers/Main_list_writer';
import Footer from './Footer';
class ListWriter extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitlleWriter />
        <MainListWriter />
        <Footer />
      </div>
    );
  }
}

export default ListWriter;
