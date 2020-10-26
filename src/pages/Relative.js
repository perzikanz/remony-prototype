import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

import Basic from './Basic';
import Easy from './Easy';
import Chord from './Chord';

export default function Relative() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Relative</h2>
      <ul className="naviList">
        <li>
          <NavLink to={`${match.url}/basic`} className="naviItem">
            単音
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/basic/easy`}
            className="naviItem"
          >
            単音(easy)
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/chord`} className="naviItem">
            コード
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/question/relative/basic">
          <Basic />
        </Route>
        <Route path="/question/relative/basic/easy">
          <Easy />
        </Route>
        <Route path="/question/relative/chord">
          <Chord />
        </Route>
      </Switch>
    </div>
  );
}
