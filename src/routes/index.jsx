import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import Aegaeon from './aegaeon';
import Adenine from './adenine';
import Dagas from './dagas';

const Root = ({ match }) => (
  <div>
    <ul>
      <li><NavLink to={`${match.path}/aegaeon`}>Aegaeon</NavLink></li>
      <li><NavLink to={`${match.path}/adenine`}>Adenine</NavLink></li>
      <li><NavLink to={`${match.path}/dagas`}>Dagas</NavLink></li>
    </ul>

    <Switch>
      <Route path={`${match.path}/aegaeon`} component={Aegaeon} />
      <Route path={`${match.path}/adenine`} component={Adenine} />
      <Route path={`${match.path}/dagas`} component={Dagas} />
      <Redirect to={`${match.path}/aegaeon`} />
    </Switch>
  </div>
);

export default Root;
