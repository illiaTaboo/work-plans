import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class AboutView extends Component {
  render () {
    return (
      <div>
        <Typography variant='h4' align='center' gutterBottom>
          Follow&nbsp;
          <Link href='http://www.tneu.edu.ua/'>
            TNEU main site
          </Link>
          &nbsp;to see more information about University.
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          This project is a part of&nbsp;
          <Link href='https://github.com/illiaTaboo'>
            Illia Voloshchuk's
          </Link>
          &nbsp;diploma work, supervisor: Iryna Voytyuk.
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          The project is open source, follow&nbsp;
          <Link href='https://github.com/illiaTaboo/work-plans'>
            Project GitHub repo
          </Link>
          &nbsp;to see project sources, add issues and contribute.
        </Typography>
      </div>
    );
  }
}

export default AboutView;
