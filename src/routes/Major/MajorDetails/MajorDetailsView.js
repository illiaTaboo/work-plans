import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'api/firebase';
import MajorDetailsTable from 'components/MajorDetailsTable';

const MajorDetailsView = ({ match: { params: { id } } }) => {
  const disciplines = firebase.disciplines();

  return (
    <MajorDetailsTable disciplines={disciplines}>
      авп
    </MajorDetailsTable>
  );
};

MajorDetailsView.propTypes = {
  match: PropTypes.object
};

export default MajorDetailsView;
