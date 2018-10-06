import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from './Comment.js'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Post(props) {
  const { classes } = props;
  var listComments
  if(props.comments !== undefined){
    listComments = props.comments.map((comment) =>
          <Grid className={classes.grid} item xs={12}>
              {<Comment xs username={comment.username} content={comment.content}/>}
          </Grid>

    );
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="headline" component="h2">
          {props.username}
        </Typography>
        
        <Typography component="p">
          {props.content}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Dislike</Button>
        <Button size="small">Comment</Button>
      </CardActions>
      <CardContent>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={24}
        >
            {listComments}
        </Grid>
      </CardContent>
    </Card>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);