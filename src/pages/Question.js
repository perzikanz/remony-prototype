import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

import Absolute from './Absolute';
import Relative from './Relative';

export default function Question() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Question</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/absolute`}>絶対音感</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/relative`}>相対音感</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/question/absolute">
          <Absolute />
        </Route>
        <Route path="/question/relative">
          <Relative />
        </Route>
      </Switch>
    </div>
  );
}
