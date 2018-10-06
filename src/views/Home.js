import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Facebook from '../components/Facebook';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const titleTheme = createMuiTheme({
   palette: {
     secondary: {main: '#ffc4c4'},
   }
})

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "95vh",
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: "72px",
    textAlign: "center",
  },
  header: {
      fontSize: "32px",
      textAlign: "center",
  },
  body: {
    fontSize: "17px",
    textAlign: "center",
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={titleTheme}>
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
                <br/>
                <Typography className={classes.header} component="p">
                    <b>Join the conversation</b>
                </Typography>
                <br/>
                <center><Facebook /></center>
                <br/>
                <Typography className={classes.body} component="p">
                Our 100 Great Ideas campaigns are online conversations where we invite 
                anyone and everyone to share their opinion about the best way to solve 
                a pressing community issue. At the end of the campaigns, we synthesize 
                all ideas into a report which we share broadly. We then bring the top 
                ideas to the decision-makers in the community who have the ability to 
                implement them.
                </Typography>              
            </Grid>
        </Grid>
      </Paper>
      </MuiThemeProvider>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
