import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import { TOP_LEVEL_ROUTES } from 'consts';

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
    </Switch>
  );
};

export default CoreRoutes;
