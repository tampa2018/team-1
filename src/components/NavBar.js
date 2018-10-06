import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

const styles = theme => ({
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      height: "80vh",
    },
    title: {
      fontSize: "72px",
      textAlign: "center",
    },
    header: {
        fontSize: "32px",
        textAlign: "center",
    },
  });

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Radical Partners
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(NavBar);