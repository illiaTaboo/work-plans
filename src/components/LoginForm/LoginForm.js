import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Typography,
  Paper,
  Button,
  FormControl,
  Avatar,
  Input,
  InputLabel,
  FormHelperText
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import firebase from 'api/firebase';
import { HOME_URL } from 'consts';
import styles from './LoginForm.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginForm extends Component {
  static propTypes = {
    history: PropTypes.any
  };

  state = { ...INITIAL_STATE }

  onSubmit = e => {
    const { email, password } = this.state;

    firebase.login(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.replace(HOME_URL);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render () {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <Paper className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form onSubmit={this.onSubmit} className={styles.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              autoComplete='off'
              autoFocus value={email}
              onChange={this.onChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='off'
              value={password}
              onChange={this.onChange}
            />
          </FormControl>
          {error &&
            <FormHelperText className={styles.error} error>{error.message}</FormHelperText>
          }
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={isInvalid}
            className={styles.formSubmitBtn}
          >
            Login
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withRouter(LoginForm);
