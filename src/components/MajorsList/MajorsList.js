import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import { MAJOR_URL } from 'consts';
import styles from './MajorsList.scss';

const MajorsList = ({ time }) => {
  const majorItemsList = time.majors.map(major => (
    <ListItem key={major.id} button component={Link} to={`${MAJOR_URL}/${major.id.toString()}`}>
      <ListItemText primary={major.name} />
    </ListItem>
  ));
  return (
    <Fragment>
      <List
        className={styles.timeList}
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader id='nested-list-subheader'>
            {time.name}
          </ListSubheader>
        }
      >
        {majorItemsList}
      </List>
      <Divider />
    </Fragment>
  );
};

MajorsList.propTypes = {
  time: PropTypes.object
};

export default MajorsList;
