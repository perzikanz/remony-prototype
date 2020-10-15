import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

import Absolute from './Absolute';
import Relative from './Relative';

import './navigation.css';

export default function Question() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Question</h2>
      <ul className="naviList">
        <li>
          <NavLink to={`${match.url}/absolute`} className="naviItem">
            絶対音感(absolute)
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/relative`} className="naviItem">
            相対音感(relative)
          </NavLink>
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
