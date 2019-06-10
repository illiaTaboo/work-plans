import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import MajorDetailsView from 'routes/MajorDetails';
import DiscipineDetailsView from 'routes/DiscipineDetails';
import LoginView from 'routes/Login';
import {
  TOP_LEVEL_ROUTES,
  HOME_URL, UNSPECIFIED_URL,
  MAJOR_DETAILS_URL,
  LOGIN_URL,
  DISCIPLINE_DETAILS_URL
} from 'consts';

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
      <Route path={LOGIN_URL} component={LoginView} />
      <Route path={MAJOR_DETAILS_URL} component={MajorDetailsView} />
      <Route path={DISCIPLINE_DETAILS_URL} component={DiscipineDetailsView} />
      <Redirect from={UNSPECIFIED_URL} to={HOME_URL} />
    </Switch>
  );
};

export default CoreRoutes;
