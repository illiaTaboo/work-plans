import React, { Component, setState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import styles from './MajorDetailsEdit.scss';

class MajorDetailsEdit extends Component {
  state = {
    text: 'text',
    selecteds: 0,
    data: this.props.disciplines,
    columns: [
      { title: 'Discipline', field: 'name', type: 'numeric' },
      { title: 'Hours', field: 'hours', type: 'numeric' },
      { title: 'Credits', field: 'credits', type: 'numeric' },
      { title: 'Lect', field: 'lect', type: 'numeric' },
      { title: 'Pract', field: 'pract', type: 'numeric' },
      { title: 'Labs', field: 'labs', type: 'numeric' },
      { title: 'Indiv. Work', field: 'indivWork', type: 'numeric' },
      { title: 'Indep. Work', field: 'indepWork', type: 'numeric' },
      { title: 'Exam', field: 'exam', type: 'numeric' },
      { title: 'Test', field: 'test', type: 'numeric' },
      { title: 'Course proj', field: 'courseProj', type: 'numeric' }
    ]
  }

  render () {
    return (
      <div className={styles.detailsTableWrapper}>
        <MaterialTable
          title='Editable disciplines table'
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data.push(newData);
                  setState({ ...this.state, data });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data[data.indexOf(oldData)] = newData;
                  setState({ ...this.state, data });
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...this.state, data });
                }, 600);
              })
          }}
        />
      </div>
    );
  }
};

MajorDetailsEdit.propTypes = {
  disciplines: PropTypes.array
};

export default MajorDetailsEdit;
