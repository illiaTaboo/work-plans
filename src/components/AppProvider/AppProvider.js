import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import firebase from 'api/firebase';

class AppProvider extends Component {
  state = {
    currentUser: AppProvider.defaultProps.currentUser,
    currentUserEmail: AppProvider.defaultProps.currentUserEmail,
    message: AppProvider.defaultProps.message
  }

  componentDidMount () {
    firebase.auth.onAuthStateChanged(user => user && this.setState({
      currentUser: user,
      currentUserEmail: user.email
    }));
  }

  render () {
    return (
      <Provider value={{
        state: this.state,
        destroySession: () => this.setState({
          currentUser: AppProvider.defaultProps.currentUser,
          currentUserEmail: AppProvider.defaultProps.currentUserEmail
        }),
        setMessage: message => this.setState({ message }),
        clearMessage: () => this.setState({
          message: AppProvider.defaultProps.message
        })
      }}
      >
        {React.Children.toArray(this.props.children)}
      </Provider>
    );
  }
}

AppProvider.defaultProps = {
  currentUser: null,
  currentUserEmail: null,
  message: null
};

AppProvider.propTypes = {
  children: PropTypes.node
};

export const {
  Provider,
  Consumer
} = createContext();

export default AppProvider;
