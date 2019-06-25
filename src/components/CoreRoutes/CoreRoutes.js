import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import {
  CORE_ROUTES,
  HOME_URL,
  UNSPECIFIED_URL
} from 'consts';

const CoreRoutes = () => {
  const routesList = CORE_ROUTES
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
