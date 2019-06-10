import React from 'react';
import PropTypes from 'prop-types';

import styles from './DiscipineDetailsEdit.scss';

const DiscipineDetailsEdit = ({ disciplines }) => {
  return (
    <div className={styles.detailsTableWrapper}>
      DiscipineDetailsEdit
    </div>
  );
};

DiscipineDetailsEdit.propTypes = {
  disciplines: PropTypes.array
};

export default DiscipineDetailsEdit;
