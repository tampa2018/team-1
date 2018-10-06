import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  big: {
    fontSize: "72px",
    textAlign: "center",
  },
});

function InvalidPage(props) {
  const { classes } = props;

  return (
    <div className={classes.big}>
        404
    </div>
  );
}

InvalidPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InvalidPage);
