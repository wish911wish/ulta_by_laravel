import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound';

// User is LoggedIn
import PrivateRoute from './PrivateRoute'
import Dashboard from './views/user/Dashboard/Dashboard';
import Event from './Views/Event/Event';

const Main = props => (
<Switch>
  {/*User might LogIn*/}
  <Route exact path='/'>
    <Home />
  </Route>
  {/*User will LogIn*/}
  <Route path='/login'>
    <Login />
  </Route>
  <Route path='/register'>
    <Register />
  </Route>
  <Route path='/event'>
    <Event />
  </Route>
  {/* User is LoggedIn*/}
  <PrivateRoute path='/event'>
    <Event />
  </PrivateRoute>
  {/*Page Not Found*/}
</Switch>
);

export default Main;
