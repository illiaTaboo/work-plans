import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MajorsList from 'components/MajorsList';
import styles from './FacultyPanel.scss';

const FacultyPanel = ({ faculty }) => {
  const cyclesList = faculty.cycles.map(cycle => (
    <div className={styles.cycleListItem} key={cycle.name}>
      <Typography className={styles.cycleListItemLabel}>{cycle.name}</Typography>
      {
        cycle.times.map(time => (
          <MajorsList key={time.name} time={time} />
        ))
      }
    </div>
  ));

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
        <Typography>{faculty.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={styles.cycleList}>
        {cyclesList}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

FacultyPanel.propTypes = {
  faculty: PropTypes.object
};

export default FacultyPanel;
