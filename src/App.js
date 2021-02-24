import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helper/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute path={ROUTES.BROWSE} user={user}>
            <Browse />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            exact
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}