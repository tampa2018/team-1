import React from 'react'
import ReactDOM from 'react-dom'
import Post from '../components/ViewPost.js'
import GetPosts from '../components/GetPosts.js'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ViewPost from '../components/ViewPost.js';

const styles = {
    grid: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
  };

class Feed extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount()
    {
        this.getPosts();
    }
    
    getPosts = _ => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(response => this.setState({ posts: response.data}))
        .catch(err => console.error(err))
    }
    
    render(){
        const { posts } = this.state;
        const { classes } = this.props;
        var listPosts;
        try{
            listPosts = posts.map((post) =>
                <Grid key={post.post_id} className={classes.grid} item xs={12}>
                    {<Post xs post_id={post.post_id} username={post.first_name +" "+post.last_name}  content={post.body} post_subject={post.post_subject}/>}
                </Grid>
            );
        }catch{}
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
}

Feed.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Feed);