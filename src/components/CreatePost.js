import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


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


class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {subject: '', body: ''};
        
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


    handleSubmit(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
        //alert('subject:' +  this.state.subject + 'body:' + this.state.body);
        
      }

      render(){
        const { classes } = this.props;    

        return (
          <Route render={({ history}) => (
            <Card className={classes.card}>
          
              <CardContent>
                <form onSubmit={(e) => {this.handleSubmit(e);history.push("/Feed");}} >

                <div>
                <TextField
                  id="standard-name"
                  label="Subject"
                  margin="normal"
                  onChange={this.handleSubjectChange}
                />
                </div>

                <div>
                <TextField
                  id="standard-name"
                  label="What do you think?"
                  margin="normal"
                  onChange={this.handleBodyChange}
                />
                </div>
                <CardActions>
                <Button size="small" type='submit'>Create Post</Button>
              </CardActions>
                
                </form>
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
