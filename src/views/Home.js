import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Facebook from '../components/Facebook';
import Grid from '@material-ui/core/Grid';


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

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={1}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={24}
        >
            <Grid item xs={12}>
                <Typography className={classes.title} variant="headline" component="h3">
                    100 Great Ideas
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.header} component="p">
                    We believe that communities are capable of solving 
                    their own challenges - they just need low-barrier 
                    methods to join together and address core issues.
                </Typography>
            </Grid>
            <center><Facebook /></center>
        </Grid>
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
