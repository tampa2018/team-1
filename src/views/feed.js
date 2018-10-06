import React from 'react'
import Post from '../components/ViewPost.js'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    grid: {
      minWidth: 275,
    },
  };

function Feed(props){
    const { classes } = props;
    let data = [
        { username: "Alex", content: "1" },
        { username: "Rohan", content: "2" },
        { username: "Wyatt", content: "3" }
        ];
    const listComments = data.map((comment) =>
        <Grid className={classes.grid} item xs={12}>
            {<Post xs username={comment.username} content={comment.content}/>}
        </Grid>
    );
    return (
    <div>
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={24}
            >
                {listComments}
            </Grid>
        </div>
    </div>

    )
}

Feed.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Feed);