import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Register from './routes/register/register';
import Signin from './routes/signin/signin';
import Home from './routes/home/index';
import ListPage from './routes/listpage/index';
import DetailPage from './routes/detail/index';
import Select from './routes/select/index';
import Online from './routes/online/index';
import City from './routes/city/index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect path="/" exact to="/user" />
        <Route path="/user" component={Register} />
        <Route path='/signin' component={Signin}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/listpage' component={ListPage}></Route>
        <Route path="/detail" component={DetailPage}></Route>
        <Route path='/select' component={Select}></Route>
        <Route path='/online' component={Online}></Route>
        <Route path='/city' component={City}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
