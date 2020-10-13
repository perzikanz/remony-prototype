import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { routes } from './routes';

export default () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/question">Question</NavLink>
        </li>
        <li>
          <NavLink to="/free">Free</NavLink>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />;
        })}
      </Switch>
    </>
  );
};
