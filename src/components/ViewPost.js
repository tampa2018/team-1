import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Comment from './Comment.js'
import Grid from '@material-ui/core/Grid'
import Respond from './Respond.js'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
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
          open: false,
          deleted:false,
          vote: null,
      }
      this.upClick = this.upClick.bind(this);
      this.downClick = this.downClick.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

    handleClose = () => {
      this.setState({ open: false });
  };

  handleClick = () => {
    this.setState({showRespond: !this.state.showRespond});
  }

  componentDidMount(){
      this.getComments();
  }

  delete = _ => {
    this.setState({deleted:true})
    console.log("In Delete");
    console.log("State");
    fetch('http://localhost:4000/deletepost/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              post_id : this.state.id
            })
          })
    this.handleClose();

    
  }
    
  upClick() {
    if(this.state.vote === null) {
      this.setState({vote: 'up'});
    }else if(this.state.vote === 'down') {
      this.setState({vote: 'up'});
    }else{
      this.setState({vote: null});
    }
  }

  downClick() {
    if(this.state.vote === null) {
      this.setState({vote: 'down'});
    }else if(this.state.vote === 'up') {
      this.setState({vote: 'down'});
    }else{
      this.setState({vote: null});
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
    return ((!this.state.deleted &&
      <Card>
        <CardHeader
          action={
            <IconButton onClick={this.handleClickOpen}>
              <DeleteIcon/>
            </IconButton>
            }
          title={this.props.post_subject}
          subheader={this.props.username}
          />
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Delete this Post?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to Delete this Post?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.delete} color="primary">
                  Delete
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Cancel
                </Button>
              </DialogActions>
              </Dialog>
        <CardContent>
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
        {this.state.showRespond && <Respond post_id={this.state.id}/>}
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
    ));
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
