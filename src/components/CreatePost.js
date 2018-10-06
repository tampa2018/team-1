import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Moment from 'react-moment';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const styles = {
  card: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
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




class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {subject: '', body: '', open: false, vertical: 'top', horizontal: 'left'};

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubjectChange(event){
      this.setState({subject: event.target.value});
    }
    handleBodyChange(event){
        this.setState({body: event.target.value});
    }

    handleClick = state => () => {
      this.setState({ open: true, ...state });
    };

    handleClose = () => {
      this.setState({ open: false });
    };


    handleSubmit(e,history) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(this.state.subject !== '' && this.state.body !== '') {
          fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fbid: localStorage.getItem("fbid"),
              post_subject: this.state.subject,
              body: this.state.body,
              time_stamp: 'dummy_string',
            })
          })
          history.push("/Feed");
        }
        else {
          this.setState({open: true, vertical: 'top', horizontal: 'left'})
        }
      }

      render(){
        const { classes } = this.props;
        const { vertical, horizontal, open } = this.state;

        return (

          <Route render={({ history}) => (

            <Card className={classes.card}>

              <CardContent>
                <form onSubmit={(e) => {this.handleSubmit(e,history);}} >

                <Typography variant="h5" component="h2">
                    What&#39;s on your mind?
                </Typography>

                <div>
                <TextField
                  id="standard-name"
                  label="Subject"
                  margin="normal"
                  onChange={this.handleSubjectChange}
                />
                </div>

                {/* <div>
                <TextField
                  id="standard-name"
                  label="What do you think?"
                  margin="normal"
                  onChange={this.handleBodyChange}
                />
                Used this for multiline textfields: https://material-ui.com/demos/text-fields/
                </div> */}

                <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="What do you think?"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  onChange={this.handleBodyChange}
                  //onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                />
                </div>
                <CardActions>
                <Button size="small" type='submit'>Create Post</Button>
              </CardActions>

                </form>

                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={this.handleClose}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Post entries cannot be empty</span>}
                  action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
                />
              </CardContent>

            </Card>

          )}/>

        );
      }
}



CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
