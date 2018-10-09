import React, { Component } from 'react';
import HeaderWriter from '../containers/Header_writer';
import MainListWriter from '../containers/Main_list_writer';
class ListWriter extends Component {
  render() {
    return (
      <div>
        <HeaderWriter />
        <MainListWriter />
      </div>
    );
  }
}

export default ListWriter;
