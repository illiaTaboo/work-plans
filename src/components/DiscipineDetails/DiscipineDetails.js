import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import styles from './DiscipineDetails.scss';

const DiscipineDetails = ({ disciplines }) => {
  const databases = disciplines[0];

  return (
    <div className={styles.detailsTableWrapper}>
      <Typography variant='subtitle1' gutterBottom>
        <b>Code:</b> {databases.code}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Course title in English:</b> {databases.name}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Course title in Ukrainian:</b> {databases.ukrName}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>ECTS credits:</b> {databases.credits}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Language of instruction:</b> {databases.lang}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Lector:</b> {databases.lector}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Instructor:</b> {databases.teacher}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Course objective:</b> {databases.objective}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Learning outcomes:</b> {databases.outcome}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Reference materials:</b> {databases.materials}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        <b>Students workload :</b> {databases.workload}
      </Typography>
    </div>
  );
};

DiscipineDetails.propTypes = {
  disciplines: PropTypes.array
};

export default DiscipineDetails;
