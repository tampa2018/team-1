import React from 'react'
import Post from '../components/post.js'

export default class Feed extends React.Component {
    render () {
        let data = [
            { username: "Alex", content: "1" },
            { username: "Rohan", content: "2" },
            { username: "Wyatt", content: "3" }
          ];
        const listComments = data.map((comment) =>
            <li>{<Post username={comment.username} content={comment.content}/>}</li>
        );
        return (
        <div>
            <div>
                {listComments}          
            </div>
        </div>

        )
    }
}