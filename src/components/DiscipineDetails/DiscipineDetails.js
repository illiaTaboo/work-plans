/* eslint-disable max-len */
/* eslint-disable object-property-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import styles from './DiscipineDetails.scss';

const DiscipineDetails = ({ disciplines }) => {
  const databases = disciplines[0];
  const data = [databases];

  const [state] = useState({
    text: 'text',
    selecteds: 0,
    data: data,
    columns: [
      { title: 'Code', field: 'code', cellStyle: { padding: '10px 0 0 10px', textAlign: 'center', verticalAlign: 'top' }, headerStyle: { padding: '0 0 0 10px', textAlign: 'center' } },
      { title: 'Course title in English:', field: 'name', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Course title in Ukrainian:', field: 'ukrName', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'ECTS credits:', type: 'numeric', field: 'credits', cellStyle: { padding: '10px 5px', textAlign: 'center', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Language of instruction:', field: 'lang', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Lector:', field: 'lector', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Instructor:', field: 'teacher', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Course objective:', field: 'objective', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
      { title: 'Learning outcomes:', field: 'outcome', cellStyle: { padding: '10px 5px', verticalAlign: 'top' }, headerStyle: { padding: '0 5px', textAlign: 'center' } },
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
      />
    </div>
  );
};

DiscipineDetails.propTypes = {
  disciplines: PropTypes.array
};

export default DiscipineDetails;
