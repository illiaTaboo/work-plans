import React from 'react';
import PropTypes from 'prop-types';

const MajorDetailsView = ({ match: { params: { id } } }) => {
  return (
    <div>
      <h1>MajorDetailsView {id}</h1>
    </div>
  );
};

MajorDetailsView.propTypes = {
  match: PropTypes.object
};

export default MajorDetailsView;
