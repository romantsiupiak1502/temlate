import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AboutUs } from '../AboutUs';
import { GreetingContainer } from '../Greeting';

export const UnauthorizedRoot: React.FC = () => {
  return (
    <Switch>
      <Route path={ '/aboutus' } component={ AboutUs }/>
      <Route path={ '/' } component={ GreetingContainer }/>
    </Switch>
  );
};
