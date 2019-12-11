import React from 'react';
import { Route } from 'react-router-dom';
import publication from './publications.json';
import Reader from './Reader/Reader';

const App = () => (
  <div>
    <Route
      path="/"
      render={props => <Reader {...props} items={publication} />}
    />
  </div>
);

export default App;
