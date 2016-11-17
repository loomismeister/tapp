import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Stalls from './components/Stalls';

export default (
  <Route component={App}>
    <Route path='/' component={Stalls} />
  </Route>
);
