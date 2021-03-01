import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AboutUs } from '../AboutUs';
import { Greeting } from '../Login';

export const UnauthorizedRoot: React.FC = () => {
  return (
    <Switch>
      <Route path={ '/aboutus' } component={ AboutUs }/>
      <Route path={ '/' } component={ Greeting }/>
    </Switch>
  );
};
