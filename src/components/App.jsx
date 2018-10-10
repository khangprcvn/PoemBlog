import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ListWriter from './List_writer';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/writers" component = {ListWriter} />
    </Switch>
  </Router>
)
export default App;
