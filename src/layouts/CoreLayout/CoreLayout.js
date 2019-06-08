import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from 'components/Header';
import CoreRoutes from 'components/CoreRoutes';
import firebase from 'api/firebase';
import 'styles/core.scss';
import styles from './CoreLayout.scss';

export const CoreLayout = ({ children }) => {
  children = React.Children.toArray(children);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return (
    <div className={styles.appContainer}>
      {/* {firebaseInitialized ? */}
        <Fragment>
          <CssBaseline />
          <Header />
          <main className={styles.mainContent}>
            <CoreRoutes />
            {children}
          </main>
        </Fragment>
        {/* :
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      } */}
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
