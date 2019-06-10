import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'api/firebase';
import MajorDetailsEdit from 'components/MajorDetailsEdit';
import MajorDetailsTable from 'components/MajorDetailsTable';
import { Consumer } from 'components/AppProvider/AppProvider';

const MajorDetailsView = ({ match: { params: { id } } }) => {
  const disciplines = firebase.disciplines();
  const faculties = firebase.faculties();

  const getTableComponent = state => {
    switch (state.currentUserEmail) {
      case 'admin@tneu.edu.ua':
        return <MajorDetailsEdit disciplines={disciplines} faculties={faculties} id={id} />;
      case 'teacher@tneu.edu.ua':
        return <MajorDetailsTable disciplines={disciplines} faculties={faculties} id={id} />;
      default:
        return <MajorDetailsTable disciplines={disciplines} faculties={faculties} id={id} />;
    }
  };

  return (
    <Consumer>
      {({ state, ...context }) => (
        getTableComponent(state)
      )}
    </Consumer>
  );
};

MajorDetailsView.propTypes = {
  match: PropTypes.object
};

export default MajorDetailsView;
