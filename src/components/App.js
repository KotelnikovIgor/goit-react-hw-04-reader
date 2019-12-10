import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Publication from './publications.json';
import Loader from './Loader/Loader';

const AsyncReader = Loadable({
  loader: () => import('./Reader/Reader' /* webpackChunkName: 'reader-page' */),
  loading: Loader,
  delay: 200,
  timeout: 10000,
});

const App = () => (
  <div>
    <Switch>
      <Route
        path="/reader"
        render={props => <AsyncReader {...props} items={Publication} />}
      />
      <Redirect to="/reader/?item=1" />
    </Switch>
  </div>
);

export default App;
