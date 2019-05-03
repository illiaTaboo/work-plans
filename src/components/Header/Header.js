import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { LOGO_URL, HOME_URL, TOP_LEVEL_ROUTES } from 'consts';
import styles from './Header.scss';

const Header = () => {
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

  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.headerToolbar}>
        <Link to={HOME_URL}>
          <img
            src={LOGO_URL}
            alt='FCIT logo'
          />
        </Link>
        <nav className={styles.headerNavbar}>
          {navigationList}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
