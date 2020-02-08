import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import './components/Title/Title';
import NavigatorBar from './navigation/NavigationBar/NavigationBar';
import PageContainer from '../src/pages/container/PageContainer';

function App() {
  const [ page, setPage ] = useState('Home');
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={3} >
          <NavigatorBar />
        </Grid>
        <Grid item xs={9} className="app-pages">
          <PageContainer page="Contact Me" />
        </Grid>
      </Grid>
    </div>
  );
}

// make page container
export default App;
