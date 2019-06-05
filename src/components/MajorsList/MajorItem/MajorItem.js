import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import styles from './MajorItem.scss';
import { MAJOR_URL } from 'consts';

const MajorItem = ({ name, id }) => {
  return (
    <div className={styles.majorItem}>
      <ListItem button component={Link} to={`${MAJOR_URL}/${id.toString()}`}>
        <ListItemText primary={name} />
      </ListItem>
      <Divider />
    </div>
  );
};

MajorItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
};

export default MajorItem;
