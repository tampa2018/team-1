import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        <Typography className={classes.title} variant="headline" component="h3">
            100 Great Ideas
        </Typography>
        <Typography className={classes.header} component="p">
            We believe that communities are capable of solving 
            their own challenges - they just need low-barrier 
            methods to join together and address core issues.
        </Typography>
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
