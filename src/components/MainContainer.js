import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Parser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:'none',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'center',
    height:'100vh',
  
    
  },
  bottom:{
    display: 'flex',
    // alignItems: 'center',
    // flexDirection:'column',
    justifyContent:'flex-end',
    height:'100vh',
  },
  img:{
    width:'100%',
    marginBottom: '0',
    paddingBottom:'0',
  },

  boldFont:{
    fontWeight:'900',
  }
  

}));

export default function MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12} sm={3}>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.bottom}>
          <img src={process.env.PUBLIC_URL + '/prem_portfolio_2.png'} className={classes.img} />
        
        </Grid>
        <Grid item xs={12} sm={3} className={classes.center}>
         
        
          <div >
            <Typography variant="h1" letterSpacing={1} gutterBottom>
              &lt;code&gt;
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Fail, Learn, Repeat...
            </Typography>
          </div>
          
        
        </Grid>
        
      </Grid>
      </Container>
    </div>
  );
}