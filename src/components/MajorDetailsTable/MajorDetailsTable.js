import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { DISCIPLINE_URL } from 'consts';
import styles from './MajorDetailsTable.scss';

const MajorDetailsTable = ({ disciplines }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, disciplines.length - page * rowsPerPage);

  const handleChangePage = newPage =>
    setPage(newPage);

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.detailsTableWrapper}>
      <Paper className={styles.root}>
        <div className={styles.tableWrapper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>Discipline</TableCell>
                <TableCell align='center'>Hours</TableCell>
                <TableCell align='center'>Credits</TableCell>
                <TableCell align='center'>Lect</TableCell>
                <TableCell align='center'>Pract</TableCell>
                <TableCell align='center'>Labs</TableCell>
                <TableCell align='center'>Indiv.<br />Work</TableCell>
                <TableCell align='center'>Indep.<br />Work</TableCell>
                <TableCell align='center'>Exam</TableCell>
                <TableCell align='center'>Test</TableCell>
                <TableCell align='center'>Course proj</TableCell>
                <TableCell align='center'>Semester</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {disciplines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.id}>
                  <TableCell scope='row'>{row.code}</TableCell>
                  <TableCell>
                    <Link to={`${DISCIPLINE_URL}/${row.id.toString()}`}>
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align='center'>{row.hours}</TableCell>
                  <TableCell align='center'>{row.credits}</TableCell>
                  <TableCell align='center'>{row.lect}</TableCell>
                  <TableCell align='center'>{row.pract}</TableCell>
                  <TableCell align='center'>{row.labs}</TableCell>
                  <TableCell align='center'>{row.indivWork}</TableCell>
                  <TableCell align='center'>{row.indepWork}</TableCell>
                  <TableCell align='center'>{row.exam}</TableCell>
                  <TableCell align='center'>{row.test}</TableCell>
                  <TableCell align='center'>{row.courseProj}</TableCell>
                  <TableCell align='center'>{row.semester}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={13} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          count={disciplines.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'Rows per page' },
            native: true
          }}
          onChangePage={(e, newPage) => handleChangePage(newPage)}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

MajorDetailsTable.propTypes = {
  disciplines: PropTypes.array
};

export default MajorDetailsTable;
