import React from 'react';
import Header from '../components/Header';
import SectionPost from './Section_post';
import Footer from '../components/Footer';
import FormPost from './Form_post';
class Post extends React.Component {
  onSubmit = values => {
    this.props.history.push('/list/post');
  } 

  render() {
    return (
      <div>
        <Header />
        <SectionPost />
        <FormPost onSubmit={this.onSubmit}/>
        <Footer />
      </div>
    );
  }
}

export default Post;
