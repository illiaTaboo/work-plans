import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import TreeView from 'components/TreeView';
import firebase from 'api/firebase';

class HomeView extends Component {
  render () {
    const faculties = firebase.faculties();

    return (
      <Fragment>
        <Typography variant='h2' align='center' gutterBottom>
          TNEU Majors:
        </Typography>
        <TreeView list={faculties} />
      </Fragment>
    );
  }
}

export default HomeView;
