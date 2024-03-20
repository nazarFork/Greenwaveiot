import { AccountCircleRounded, ExpandMoreRounded, NotificationsNoneOutlined, RefreshRounded } from '@mui/icons-material';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';

const columns = [
  { id: 'First', label: 'First name', minWidth: 170, align: "left" },
  { id: 'Last', label: 'Last name', minWidth: 170, align: "left" },
  { id: 'Phone', label: 'Phone', minWidth: 170, align: "left" },
  { id: 'Email', label: 'Email', minWidth: 170, align: "left" },
];

const rows = [
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'ayzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'byzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'cyzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'zyzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'zyzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'ayzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'byzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'cyzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'zyzxddskf@gmail.com' },
  { First: 'Miqayal', Last: 'Admin', Phone: '+374xx xx xxx', Email: 'zyzxddskf@gmail.com' },
];

export default function DataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div>
        <div className='tool-tip' style={{ marginBottom: '25px', backgroundColor: 'white' }}>
          <Grid container>
            <Grid item lg={10} md={10} sm={10} xs={10}></Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} style={{ display: 'flex', marginBottom: '20px', color: 'gray' }}>
              <span style={{ marginTop: '17px', marginRight: '15px' }}> <NotificationsNoneOutlined fontSize='small' /> </span>
              <AccountCircleRounded fontSize='large' style={{ marginTop: '10px' }} />
              <Typography variant='caption' paddingLeft={0.8} style={{ fontSize: '15px', fontWeight: '20', marginTop: '15px' }} > Admin Admin </Typography>
              <span> <ExpandMoreRounded fontSize='medium' style={{marginTop: '15px'}} /> </span>
            </Grid>
          </Grid>
        </div>
        <div className='table' style={{ margin: '10px' }}>
          <Paper sx={{ width: '100%', borderRadius: 5 }}>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" colSpan={1}>
                      <Typography variant='h4'> User </Typography>
                    </TableCell>
                    <TableCell align="right" colSpan={4}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ borderRight: '1px solid lightgray', padding: '5px', paddingRight: '20px' }}>
                          <Button variant='contained' color='success' style={{ backgroundColor: '#33ab3a' }}> Add user </Button>
                        </span>
                        <span style={{ paddingLeft: '15px', marginTop: '10px' }}> <RefreshRounded fontSize='medium' /> </span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 57, minWidth: column.minWidth, fontSize: 18 }}
                      >
                        <b> {column.label} </b>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </>
  );
}
