import React from 'react';
import love_bg from '../assets/img/love_bg.jpg';
import cm_bg from '../assets/img/cm_bg.jpg';
import Poem from './Poem';
import {connect} from 'react-redux';
class SectionHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      poems: [
        {
          name : 'Chào ngày mới',
          type : 'Thơ tình yêu',
          author : 'Trần Quang Hoài',
          desc : 'Một thời để nhớ',
          picture : 'https://lh4.googleusercontent.com/-UbvRd6JthAY/VQz0qoLZQWI/AAAAAAAAFdc/CjsJPI4a5Fs/w1023-h763/%25C3%25BD%2Bch%25C3%25AD.jpg',
          content : 'Dài lắm'
        }
      ]
    };
  }
  render() {
    var { poems } = this.props;
    var poemElements = poems.map((poem,index) => {
      //console.log(poem);
      return <Poem key={index} poem={poem}/>
    });
    return (
      <section className="bg-light-gray">
        <div className="container">
          <h3 className="heading">Thể loại được xem nhiều</h3>
          <div className="row featured align-items-stretch">
            {poemElements}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    poems: state.PoemReducer
  }
}

export default connect(mapStateToProp,null) (SectionHome);