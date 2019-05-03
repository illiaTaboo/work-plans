import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header';
import CoreRoutes from 'components/CoreRoutes';
import 'styles/core.scss';
import styles from './CoreLayout.scss';

export const CoreLayout = ({ children }) => {
  children = React.Children.toArray(children);

  return (
    <div className={styles.appContainer}>
      <CssBaseline />
      <CoreRoutes />
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
