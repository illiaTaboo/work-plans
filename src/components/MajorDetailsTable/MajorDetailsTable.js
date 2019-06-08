import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>Discipline</TableCell>
              <TableCell align='center' padding='checkbox'>Hours</TableCell>
              <TableCell align='center' padding='checkbox'>Credits</TableCell>
              <TableCell align='center' padding='checkbox'>Lect</TableCell>
              <TableCell align='center' padding='checkbox'>Pract</TableCell>
              <TableCell align='center' padding='checkbox'>Labs</TableCell>
              <TableCell align='center' padding='checkbox'>Indiv.<br />Work</TableCell>
              <TableCell align='center' padding='checkbox'>Indep.<br />Work</TableCell>
              <TableCell align='center' padding='checkbox'>Exam</TableCell>
              <TableCell align='center' padding='checkbox'>Test</TableCell>
              <TableCell align='center' padding='checkbox'>Course proj</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {disciplines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row' padding='checkbox'>
                  {row.name}
                </TableCell>
                <TableCell align='center' padding='checkbox'>{row.hours}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.credits}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.teacherLess.lect}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.teacherLess.pract}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.teacherLess.labs}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.teacherLess.indivWork}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.indepWork}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.formControl.exam}</TableCell>
                <TableCell align='center' padding='checkbox'>{row.formControl.test}</TableCell>
                <TableCell align='center' padding='checkbox'>
                  {row.formControl.courseProj}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
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
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </div>
  );
};

MajorDetailsTable.propTypes = {
  disciplines: PropTypes.array
};

export default MajorDetailsTable;
