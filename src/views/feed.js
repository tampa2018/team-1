import React from 'react'
import SimpleCard from '../components/post.js'

export default class Feed extends React.Component {
    render () {
        const username = "testName";
        const content = `This is a lot of text for a content of a post`;

        return (
        <div>
            <div>
                <SimpleCard username={username} content={content}/>
            </div>
        </div>

        )
    }
}