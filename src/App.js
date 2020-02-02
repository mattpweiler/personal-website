import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import './components/Title/Title';
import NavigatorBar from './navigation/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={3} >
          <NavigatorBar />
        </Grid>
        <Grid item xs={9} >
          pages
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
