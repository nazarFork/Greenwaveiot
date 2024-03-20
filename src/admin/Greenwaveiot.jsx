import React from 'react';
import FirstMenu from './FirstMenu';
import DataTable from './DataTable';
import { Grid, colors } from '@mui/material';

export default function Greenwaveiot() {
  return (
    <>
      <Grid container style={{backgroundColor: 'rgba(224, 224, 224, 0.5)'}}>
        <Grid item lg={3} md={3} style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
          <FirstMenu />
        </Grid>
        <Grid item lg={9} md={9} xs={12} sm={12}>
          <DataTable />
        </Grid>
      </Grid>
    </>
  );
}

