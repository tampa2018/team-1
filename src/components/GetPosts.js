import React, { Component } from 'react'
class GetPosts extends Component {    
    
    state = {
        posts: []
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

    // Can be deleted 
    renderPost = ({ post_subject}) => <div>{post_subject}</div>

    render(){
        const { posts } = this.state;
        return (
            <div>
                {posts.map(this.renderPost)}
            </div>
        )
        console.log("GetPosts");
        console.log(posts);

    }
    // Can be deleted
   
}

export default GetPosts;
