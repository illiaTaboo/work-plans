import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'api/firebase';
import MajorDetailsEdit from 'components/MajorDetailsEdit';
import MajorDetailsTable from 'components/MajorDetailsTable';
import { Consumer } from 'components/AppProvider/AppProvider';

const MajorDetailsView = ({ match: { params: { id } } }) => {
  const disciplines = firebase.disciplines();

  return (
    <Consumer>
      {({ state, ...context }) => (
        state.currentUser ?
          <MajorDetailsEdit disciplines={disciplines} />
          :
          <MajorDetailsTable disciplines={disciplines} />
      )}
    </Consumer>
  );
};

MajorDetailsView.propTypes = {
  match: PropTypes.object
};

export default MajorDetailsView;
