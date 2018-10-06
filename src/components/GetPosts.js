import React, { Component } from 'react'
import _ from 'lodash'
class GetPosts extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          posts: []
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

    returnPosts = () => {
        this.getPosts();
        return _.cloneDeep(this.state.posts)
    }

    // Can be deleted 
    renderPost = ({ post_subject}) => <div>{post_subject}</div>

    render(){
        const { posts } = this.state;
        console.log("GetPosts");
        console.log(posts);
        return (
            <div>
                {posts.map(this.renderPost)}
            </div>
        )
        

    }
    // Can be deleted
   
}

export default GetPosts;
