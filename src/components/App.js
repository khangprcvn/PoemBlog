import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ListWriter from './List_writer';
import Contact from './contact/Contact';
import Login_Signup from './login/Login_Signup.jsx';
import Post from './post/Post';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/writers" component = {ListWriter} />
      <Route path="/contact" component = {Contact} />
      <Route path="/login" component = {Login_Signup}/>
      <Route path="/post_poem" component = {Post}/>
    </Switch>
  </Router>
)
export default App;
