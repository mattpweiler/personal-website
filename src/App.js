import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import './App.css';
import './components/Title/Title';
import Navigator from './navigation/Navigator';
import PageContainer from '../src/pages/container/PageContainer';

function App() {
  const [ page, setPage ] = useState('Home');
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2} sm={3} className="navigator" >
          <Navigator onTabSelect={setPage} />
        </Grid>
        <Grid item xs={12} sm={9} className="app-pages">
          <PageContainer page={page} />
        </Grid>
      </Grid>
    </div>
  );
}

// make page container
export default App;
