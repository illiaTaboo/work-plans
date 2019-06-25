import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import firebase from 'api/firebase';

import { TOP_LEVEL_ROUTES, LOGIN_ROUTE } from 'consts';
import { Consumer } from 'components/AppProvider/AppProvider';
import styles from './HeaderNavbar.scss';

const HeaderNavbar = ({ history }) => {
  const navigationList = TOP_LEVEL_ROUTES
    .map(({ exact, path, name, color, variant }) => (
      <Button
        component={Link}
        to={path}
        key={path}
        exact={`${exact}`}
        color={color}
        variant={variant}
      >
        {name}
      </Button>
    ));

  const handleLogout = context => {
    firebase.logout();
    context.destroySession();
    history.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <Consumer>
        {({ state, ...context }) => (
          state.currentUser ?
            <Fragment>
              {navigationList}
              <Button
                onClick={() => handleLogout(context)}
                color='secondary'
                variant='outlined'
              >
                Sing Out
              </Button>
            </Fragment>
            :
            <Fragment>
              {navigationList}
              <Button
                component={Link}
                to={LOGIN_ROUTE.path}
                key={LOGIN_ROUTE.path}
                color={LOGIN_ROUTE.color}
                variant={LOGIN_ROUTE.variant}
              >
                {LOGIN_ROUTE.name}
              </Button>
            </Fragment>
        )}
      </Consumer>
    </nav>
  );
};

HeaderNavbar.propTypes = {
  history: PropTypes.any
};

export default withRouter(HeaderNavbar);
