import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Respond from './Respond.js'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

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

function ExpertInfo() {
  return (
    <Typography variant="headline" component="h3">
      Expert Title | Expert position
    </Typography>
  )
}

class Comment extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        deleted: false
    }
      this.showExpertInfo = this.showExpertInfo.bind(this);
  }

  showExpertInfo() {
    //TODO: Check if the user is an expert, if so display their title and org they are involved in + maybe an icon
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
  };

  delete = _ => {
    this.setState({deleted:true})
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    var ExpertInfo;
    if(this.state.expert){
      ExpertInfo=<ExpertInfo/>
    }
    
    return (!this.state.deleted &&(
      <Card>
        <CardHeader
          action={
            <IconButton onClick={this.handleClickOpen}>
              <DeleteIcon/>
            </IconButton>
            }
          title={this.props.username}
          />
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Delete this Comment?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to Delete this Comment?
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
          {/*showExpertInfo();*/}
          {/*ExpertInfo*/}
          <Typography component="p">
            {this.props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Dislike</Button>
        </CardActions>
      </Card>
    ));
  }
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
