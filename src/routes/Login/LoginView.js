import React, { Component } from 'react';

import LoginForm from 'components/LoginForm';
import styles from './LoginView.scss';

class LoginView extends Component {
  render () {
    return (
      <div className={styles.login}>
        <LoginForm />
      </div>
    );
  }
}

export default LoginView;
