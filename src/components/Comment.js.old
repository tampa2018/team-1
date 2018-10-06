import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ExpertInfo extends React.Component {
  constructor(props) {
    super(props);
    //TODO: this.state = {expertTitle, expertInfo}
  }

  render() {
    return (
      <Typography variant="headline" component="h3">
        Expert Title | Expert position
      </Typography>
    )
  };
}

class Comment extends React.Component {
  constructor(props){
      super(props);
      this.state = {subject: '', body: '', open: false, vertical: 'top', horizontal: 'left', expert: 'false'};

      this.showExpertInfo = this.showExpertInfo.bind(this);
  }
  

  showExpertInfo() {
    //TODO: Check if the user is an expert, if so display their title and org they are involved in + maybe an icon
  }

  render() {
    var ExpertInfo = ""
    if(this.state.expert){
      ExpertInfo=<ExpertInfo/>
    }
    return (
      <Card>
        <CardContent>

          <Typography variant="headline" component="h2">
            {this.state.username}
          </Typography>

          {/*showExpertInfo();*/}

          {ExpertInfo}

          <Typography component="p">
            {this.state.content}

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Dislike</Button>
        </CardActions>
      </Card>
    );
  }
}



export default Comment;
