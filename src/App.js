import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import Question from './Question';
import Free from './Free';

export default () => {
  return (
    <>
      <Switch>
        <Route path="/Question" component={Question} />
        <Route path="/Free" component={Free} />
        <Route path="/" component={Home} />
      </Switch>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Question">Question</NavLink>
        </li>
        <li>
          <NavLink to="/Free">Free</NavLink>
        </li>
      </ul>
    </>
  );
};
