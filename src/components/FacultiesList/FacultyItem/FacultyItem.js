import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import MajorsList from 'components/MajorsList';

const FacultyItem = ({ name, majors }) => {
  const [open, setOpen] = useState(true);

  function handleClick () {
    setOpen(!open);
  }

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <MajorsList majors={majors} />
      </Collapse>
    </Fragment>
  );
};

FacultyItem.propTypes = {
  name: PropTypes.string,
  majors: PropTypes.array
};

export default FacultyItem;
