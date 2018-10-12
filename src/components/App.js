import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ListWriter from './List_writer';
import Contact from '../components/contact/Contact';
import Post from '../containers/Post';
import PoemList from '../containers/Poem_list';
import Register from './Register';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/writers" component = {ListWriter} />
      <Route path="/contact" component = {Contact} />
      <Route path="/posts/new" component={Post} />
      <Route path="/list/post" component={PoemList} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)
export default App;
