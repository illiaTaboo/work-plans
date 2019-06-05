import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import MajorItem from './MajorItem';

const MajorsList = ({ majors }) => {
  const majorsList = majors.map(
    major => (
      <MajorItem
        key={major.id}
        name={major.name}
        id={major.id}
      />
    )
  );

  return (
    <List component='div' disablePadding>
      {majorsList}
    </List>
  );
};

MajorsList.propTypes = {
  majors: PropTypes.array
};

export default MajorsList;
