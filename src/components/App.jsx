import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ListWriter from './List_writer';
import Contact from './contact/Contact';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/writers" component = {ListWriter} />
      <Route path="/contact" component = {Contact} />
    </Switch>
  </Router>
)
export default App;
