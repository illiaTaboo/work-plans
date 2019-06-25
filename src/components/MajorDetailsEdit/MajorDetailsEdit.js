/* eslint-disable max-len */
/* eslint-disable object-property-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

import { DISCIPLINE_URL } from 'consts';
import styles from './MajorDetailsEdit.scss';

const MajorDetailsEdit = ({ disciplines, faculties, id }) => {
  const [state, setState] = useState({
    text: 'text',
    selecteds: 0,
    data: disciplines,
    columns: [
      { title: 'Code', field: 'code', cellStyle: { padding: '0 0 0 20px' }, headerStyle: { padding: '0 0 0 20px' }
      },
      { title: 'Course', field: 'name', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' },
        render: rowData =>
          <Link to={`${DISCIPLINE_URL}/${rowData.id.toString()}`}>{rowData.name}</Link>
      },
      { title: 'Hours', field: 'hours', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Credits', field: 'credits', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Lect', field: 'lect', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Pract', field: 'pract', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Labs', field: 'labs', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Indiv. Work', field: 'indivWork', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Indep. Work', field: 'indepWork', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Exam', field: 'exam', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Test', field: 'test', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Course proj', field: 'courseProj', type: 'numeric', cellStyle: { padding: '0 5px' }, headerStyle: { padding: '0 5px' } },
      { title: 'Semester', field: 'semester', type: 'numeric', cellStyle: { padding: '0 20px 0 0' }, headerStyle: { padding: '0 20px 0 0' } }
    ]
  });

  const curentMajor = 1; // TODO add major id logic
  const tableTitle = curentMajor.name;

  return (
    <div className={styles.detailsEditWrapper}>
      <MaterialTable
        title={tableTitle}
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true
        }}
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
  disciplines: PropTypes.array,
  faculties: PropTypes.array,
  id: PropTypes.string
};

export default MajorDetailsEdit;
