import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'api/firebase';
import MajorDetailsEdit from 'components/MajorDetailsEdit';

const MajorDetailsView = ({ match: { params: { id } } }) => {
  const disciplines = firebase.disciplines();

  return (
    <MajorDetailsEdit disciplines={disciplines} />
  );
};

MajorDetailsView.propTypes = {
  match: PropTypes.object
};

export default MajorDetailsView;
