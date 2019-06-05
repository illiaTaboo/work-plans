import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import FacultyItem from './FacultyItem';
// import styles from './FacultiesList.scss';

const FacultiesList = ({ faculties }) => {
  const facultiesList = faculties.map(
    faculty => (
      <FacultyItem
        key={faculty.id}
        name={faculty.name}
        majors={faculty.majors}
      />
    )
  );

  return (
    <List component='nav'>
      {facultiesList}
    </List>
  );
};

FacultiesList.propTypes = {
  faculties: PropTypes.array
};

export default FacultiesList;
