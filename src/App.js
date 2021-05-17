import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import './pages/navigation.css';

export default () => {
  return (
    <BrowserRouter>
      <ul className='naviList'>
        <li>
          <NavLink to='/' className='naviItem'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/question' className='naviItem'>
            Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/free' className='naviItem'>
            Free
          </NavLink>
        </li>
        <li>
          <NavLink to='/chord' className='naviItem'>
            Chord
          </NavLink>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};
