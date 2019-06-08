import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import styles from './MajorDetailsEdit.scss';

const MajorDetailsEdit = ({ disciplines }) => {
  const [state, setState] = useState({
    text: 'text',
    selecteds: 0,
    data: disciplines,
    columns: [
      { title: 'Discipline', field: 'name' },
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
  });

  return (
    <div className={styles.detailsEditWrapper}>
      <MaterialTable
        title='Editable disciplines table'
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </div>
  );
};

MajorDetailsEdit.propTypes = {
  disciplines: PropTypes.array
};

export default MajorDetailsEdit;
