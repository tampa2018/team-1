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
        { username: "Alex", content: "1",
          comments : [
                        { username: "Rohan", content: "Hey Alex"},
                        { username: "Ryan", content: "Hey Rohan"}
                     ]
        },
        { username: "Rohan", content: "2" },
        { username: "Wyatt", content: "3",
          comments : [
                        { username: "Sam", content: "Wow long day"}
                     ]
        }
        ];
    const listPosts = data.map((post) =>
        <Grid className={classes.grid} item xs={12}>
            {<Post xs username={post.username} content={post.content} comments={post.comments}/>}
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
                {listPosts}
            </Grid>
        </div>
    </div>

    )
}

Feed.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Feed);