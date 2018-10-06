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




class Contact extends React.Component{
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
            <center>
              <CardContent>   

              <Typography variant="Display3" component="h1">
                  <br/>
                Contact Us
              </Typography>

              <Typography variant="title" component="h1">
                  <br/>
                  Email us at <a href="info@radicalpartners.net">info@radicalpartners.net </a>with any inquiries about our leadership development programs, massive community engagements or anything else!
              </Typography>
             
              <Typography variant="title" component="h2">
                  <br/>
                Visit our <a href="http://www.radical.partners/">website </a>for more information on our organization.
              </Typography>


              <Typography variant="title" component="h2">
                  <br/>
                If you would like to stay up to date on our events, follow us on social media!
              </Typography>

              <Typography variant="headline" component="h2">
                  <br/>
              <a href="https://www.facebook.com/radicalpartners"><img src={require('./fbfinal.png')} height = "60" /></a>
              &nbsp;&nbsp;
              <a href="https://twitter.com/RadicalPartners"><img src={require('./twitterinitial.png')} height = "60" /></a>
              </Typography>

              

              </CardContent>
            </center>  
            </Card>

            
          )}/>

        );
      }
}



Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
