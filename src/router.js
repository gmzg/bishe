import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect path="/" exact to="/user" />
        <Route path="/user" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
