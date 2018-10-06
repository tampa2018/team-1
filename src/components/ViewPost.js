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
import UpIcon from '@material-ui/icons/ThumbUp';
import DownIcon from '@material-ui/icons/ThumbDown';

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

class Post extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          comments : [],
          showRespond: false,
          id: this.props.post_id,
          vote: null,
      }
  }

  handleClick = () => {
    this.setState({showRespond: !this.state.showRespond});
  }

  componentDidMount(){
      this.getComments();
  }

  upClick() {
    if(this.state.vote === null) {
      this.state.vote = 'up';
    }
    else if(this.state.vote === 'down') {
      this.state.vote = 'up';
    }
  }

  downClick() {
    if(this.state.vote === null) {
      this.state.vote = 'down';
    }
    else if(this.state.vote === 'up') {
      this.state.vote = 'down';
    }
  }



  getComments = _ => {
    fetch('http://localhost:4000/comments/' + this.state.id)
    .then(response => response.json())
    .then(response => this.setState({ comments: response.data}))
    .catch(err => console.error(err))
  }

  render() {
    const { classes } = this.props;
    const { comments } = this.state;
    var listComments
    if(comments != undefined){
      listComments = comments.map((comment) =>
        <Grid key={comment.comment_id} item xs={12}>
            {<Comment xs username={comment.first_name +" "+comment.last_name}  content={comment.body}/>}
        </Grid>
      );
    }
    return (
      <Card>
        <CardContent>

          <Typography variant="headline" component="h2">
            {this.props.username}
          </Typography>

          <Typography variant="title">
            {this.props.post_subject}
          </Typography>

          <Typography component="p">
            {this.props.content}

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.upClick}>Like</Button>
          <Button size="small" onClick={this.downClick}>Dislike</Button>
          <Button size="small" onClick={this.handleClick}>Comment</Button>
          {this.state.vote === 'up' && <UpIcon/>};
          {this.state.vote === 'down' && <DownIcon/>};
        </CardActions>
        {this.state.showRespond && <Respond/>}
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
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
