import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
export default function PrivateRoute ({ children, ...rest }) {
  console.log('PrivateRoute')
  console.log(children)
  console.log(location)
  return (
    <Route
    {...rest}
    render={({ location }) =>
      true ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  )
};

// onClickとかで遷移が発生しなかったら  ↓のwith Routerを使ってみる
// export default withRouter(PrivateRoute);
