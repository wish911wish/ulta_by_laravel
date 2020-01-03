import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';

import Home from './components/Home/Home';
import Event from './views/Event/Event';
// import Register from './views/Register/Register';
// import NotFound from './views/NotFound/NotFound';
// import Main from './Router';

function Index () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/event' component={Event} />
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}
ReactDOM.render(<Index/>, document.getElementById('index'));