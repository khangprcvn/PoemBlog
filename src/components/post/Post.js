import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Post_Form from '../post/Post_Form.jsx';
class Post extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Post_Form />
        <Footer />
      </div>
    );
  }
}
export default Post;
