/* eslint-disable max-len */
/* eslint-disable object-property-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';

import styles from './DiscipineDetailsEdit.scss';

const DiscipineDetailsEdit = ({ disciplines }) => {
  const databases = disciplines[0];
  const data = [databases];

  const [state, setState] = useState({
    text: 'text',
    selecteds: 0,
    data: data,
    columns: [
      { title: 'Code', field: 'code', cellStyle: { padding: '10px 0 0 10px', textAlign: 'center', verticalAlign: 'top' }, headerStyle: { padding: '0 0 0 10px', textAlign: 'center' } },
      { title: 'Course title in English:', field: 'name', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Course title in Ukrainian:', field: 'ukrName', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'ECTS credits:', field: 'credits', type: 'numeric', cellStyle: { padding: '10px 5px', textAlign: 'center', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Language of instruction:', field: 'lang', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Lector:', field: 'lector', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Instructor:', field: 'teacher', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Course objective:', field: 'objective', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Learning outcomes:', field: 'outcome', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' },
        editComponent: item => (
          <TextField
            className={styles.input}
            type='text'
            value={item.value}
            onChange={e => item.onChange(e.target.value)}
          />
        )
      },
      { title: 'Reference materials:', field: 'materials', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Students workload:', field: 'workload', type: 'numeric', cellStyle: { padding: '10px 10px 0 0', textAlign: 'center', verticalAlign: 'top' }, headerStyle: { padding: '0 10px 0 0', textAlign: 'center' } }
    ]
  });

  const tableTitle = databases.name;

  return (
    <div className={styles.detailsTableWrapper}>
      <MaterialTable
        title={tableTitle}
        columns={state.columns}
        data={state.data}
        options={{
          search: false,
          paging: false,
          sorting: false,
          rowStyle: {
            backgroundColor: '#EEE'
          }
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </div>
  );
};

DiscipineDetailsEdit.propTypes = {
  disciplines: PropTypes.array
};

export default DiscipineDetailsEdit;
