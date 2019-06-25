import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';

import { LOGO_URL, HOME_URL } from 'consts';
import HeaderNavbar from 'components/HeaderNavbar';
import styles from './Header.scss';

const Header = ({ history }) => {
  return (
    <AppBar className={styles.header}>
      <Toolbar className={styles.headerToolbar}>
        <Link to={HOME_URL}>
          <img
            src={LOGO_URL}
            alt='FCIT logo'
          />
        </Link>
        <HeaderNavbar history={history} />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  history: PropTypes.any
};

export default withRouter(Header);
