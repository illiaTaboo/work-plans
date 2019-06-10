import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import firebase from 'api/firebase';

import { LOGO_URL, HOME_URL, TOP_LEVEL_ROUTES, LOGIN_ROUTE } from 'consts';
import { Consumer } from 'components/AppProvider/AppProvider';
import styles from './Header.scss';

const Header = ({ history }) => {
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
    <AppBar className={styles.header}>
      <Toolbar className={styles.headerToolbar}>
        <Link to={HOME_URL}>
          <img
            src={LOGO_URL}
            alt='FCIT logo'
          />
        </Link>
        {/* TODO: separate component */}
        <nav className={styles.headerNavbar}>
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
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  history: PropTypes.any
};

export default withRouter(Header);
