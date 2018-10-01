import React from 'react';
import Poets from './List_poet';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list_poet" component={Poets} />
    </Switch>
  </main>
)

export default Main;