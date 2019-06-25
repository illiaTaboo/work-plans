/* eslint-disable max-len */
/* eslint-disable object-property-newline */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import { DISCIPLINE_URL } from 'consts';
import { Consumer } from 'components/AppProvider/AppProvider';
import styles from './MajorDetailsTable.scss';

const MajorDetailsTable = ({ disciplines, faculties, id }) => {
  const [table] = useState({
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
    <Consumer>
      {({ state, ...context }) => (
        <div className={styles.detailsEditWrapper}>
          <MaterialTable
            title={tableTitle}
            columns={table.columns}
            data={table.data}
            options={{
              exportButton: true
            }}
          />
        </div>
      )}
    </Consumer>
  );
};

MajorDetailsTable.propTypes = {
  disciplines: PropTypes.array,
  faculties: PropTypes.array,
  id: PropTypes.string
};

export default MajorDetailsTable;
