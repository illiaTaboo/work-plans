import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'api/firebase';
import DiscipineDetailsEdit from 'components/DiscipineDetailsEdit';
import DiscipineDetails from 'components/DiscipineDetails';
import { Consumer } from 'components/AppProvider/AppProvider';

const DiscipineDetailsView = ({ match: { params: { id } } }) => {
  const disciplines = firebase.disciplines();

  const getDetailsComponent = state => {
    switch (state.currentUserEmail) {
      case 'teacher@tneu.edu.ua':
        return <DiscipineDetailsEdit disciplines={disciplines} />;
      default:
        return <DiscipineDetails disciplines={disciplines} />;
    }
  };

  return (
    <Consumer>
      {({ state, ...context }) => (
        getDetailsComponent(state)
      )}
    </Consumer>
  );
};

DiscipineDetailsView.propTypes = {
  match: PropTypes.object
};

export default DiscipineDetailsView;
