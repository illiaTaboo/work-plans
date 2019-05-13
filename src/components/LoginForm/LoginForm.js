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

class LoginForm extends Component {
  static propTypes = {
    history: PropTypes.any
  };

  state = {
    email: '',
    password: '',
    error: null
  };

  onSubmit = e => {
    const { email, password } = this.state;

    firebase.login(email, password)
      .then(() => {
        this.setState(this.state);
        this.props.history.replace(HOME_URL);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onInputChange = e =>
    this.setState({ [e.target.name]: e.target.value });

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
              name='email'
              value={email}
              onChange={this.onInputChange}
              autoFocus
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={this.onInputChange}
            />
          </FormControl>
          {error &&
            <FormHelperText error>{error.message}</FormHelperText>
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
