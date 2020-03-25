import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar';
import MainContainer from "./components/MainContainer"


import './App.css';



function App() {
  
  return (
    <div className='App'>
     <NavBar />
     <MainContainer/>
     
    </div>
  );
}

export default App;
