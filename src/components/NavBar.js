import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  
    
  },
  appBar: {
    background: '#222',
    color:'#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    marginRight: theme.spacing(6),

  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Prem Krishna Puttegowda
          </Typography>

          <Typography variant="subtitle" className={classes.menuItem}>
            About
          </Typography>
          <Typography variant="subtitle" className={classes.menuItem}>
            Projects
          </Typography>

          <Typography variant="subtitle" className={classes.menuItem}>
            Work Experience
          </Typography>
          
          <Typography variant="subtitle" className={classes.menuItem}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}