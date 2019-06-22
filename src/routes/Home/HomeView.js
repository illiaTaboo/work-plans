import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import FacultyPanel from 'components/FacultyPanel';
import firebase from 'api/firebase';

const faculties = [
  {
    name: 'Faculty of Computer Information Technology',
    cycles: [
      {
        name: 'First Cycle',
        times: [
          {
            name: 'Full Time',
            majors: [
              {
                id: 1,
                name: 'Computer Science'
              },
              {
                id: 2,
                name: 'Computer Engineering'
              }
            ]
          }
        ]
      },
      {
        name: 'Second Cycle',
        times: [
          {
            name: 'Full Time',
            majors: [
              {
                id: 3,
                name: 'Software Engineering'
              },
              {
                id: 4,
                name: 'Economic Cybernetics'
              }
            ]
          },
          {
            name: 'Part Time',
            majors: [
              {
                id: 5,
                name: 'Software Engineering'
              },
              {
                id: 6,
                name: 'Economic Cybernetics'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Faculty of Economics and Management',
    cycles: [
      {
        name: 'First Cycle',
        times: [
          {
            name: 'Full Time',
            majors: [
              {
                id: 7,
                name: 'Managment'
              },
              {
                id: 8,
                name: 'Marketing'
              }
            ]
          }
        ]
      },
      {
        name: 'Second Cycle',
        times: [
          {
            name: 'Full Time',
            majors: [
              {
                id: 9,
                name: 'Economics and Management'
              },
              {
                id: 10,
                name: 'Public Management'
              }
            ]
          }
        ]
      }
    ]
  }
];

class HomeView extends Component {
  render () {
    // const faculties = firebase.faculties();
    const facultyPanels = faculties.map(faculty => (
      <FacultyPanel faculty={faculty} key={faculty.name} />
    ));

    return (
      <Fragment>
        <Typography variant='h2' align='center' gutterBottom>
          TNEU Majors:
        </Typography>
        {facultyPanels}
      </Fragment>
    );
  }
}

export default HomeView;
