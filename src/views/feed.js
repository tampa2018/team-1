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
            names: [],
            current: []
        }
    }

    componentDidMount()
    {
        this.getPosts();
    }

    respond(response){
        this.setState({ posts: response.data})
        const { posts } = this.state;
        for (var i=0; i < posts.length; i++) {
            this.getName(posts[i].fbid)
        } 
    }
    
    getPosts = _ => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(response => this.respond(response))
        .catch(err => console.error(err))
    }
    getName = (id) => {
        fetch('http://localhost:4000/users/' + id)
        .then(response => response.json())
        .then(response => this.setState(previousState => ({
                            names: [...previousState.names, {id:response.data}]
                        })))
        .catch(err => console.error(err))
    }
    
    render(){
        const { posts } = this.state;
        const { names } = this.state;
        const { current } = this.state;
        const { classes } = this.props;
        var username;
        const listPosts = posts.map((post) =>
            <Grid className={classes.grid} item xs={12}>
                {<Post xs username={names[post.fbid] && (names[post.fbid].id[0].first_name +" "+names[post.fbid].id[0].last_name)} content={post.body} comments={post.comments}/>}
            </Grid>
        );
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