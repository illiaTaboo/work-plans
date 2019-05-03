import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { TOP_LEVEL_ROUTES, HOME_URL, UNSPECIFIED_URL } from 'consts';

const CoreRoutes = () => {
  const routesList = TOP_LEVEL_ROUTES
    .map(({ path, exact, component }) => (
      <Route
        key={path}
        path={path}
        exact={exact}
        component={component}
      />
    ));

  return (
    <Switch>
      {routesList}
      <Redirect from={UNSPECIFIED_URL} to={HOME_URL} />
    </Switch>
  );
};

export default CoreRoutes;
