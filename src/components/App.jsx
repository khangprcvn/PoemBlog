import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ListWriter from '../containers/list_writer';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/list" component = {ListWriter} />
    </Switch>
  </Router>
)
export default App;
