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
import Respond from './Respond.js'

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

class Post extends React.Component {
  constructor(props){
      super(props);
      this.state = {showCommentBox: false};
      this.showComment = this.showComment.bind(this);
      var listComments
      if(props.comments !== undefined){
        this.listComments = props.comments.map((comment) =>
              <Grid className={classes.grid} item xs={12}>
                  {<Comment xs username={comment.username} content={comment.content}/>}
              </Grid>

        );
      }
  }
  showComment() {
    this.setState({showCommentBox: true})
  }
  render() {
    return (
      <Card className={this.props.card}>
        <CardContent>

          <Typography variant="headline" component="h2">
            {this.props.username}
          </Typography>

          <Typography component="p">
            {this.props.content}

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Dislike</Button>
          <Button size="small" onClick={this.showComment}>Comment</Button>
        </CardActions>
        {this.state.showCommentBox && <Respond/>}
        <CardContent>
          <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              spacing={24}
          >
              {this.listComments}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
