import React, {Component} from "react";
import "./BlogPost.css"

export default class BlogPost extends Component {
    constructor() {
        super()
        this.state = {
            title: "Blog Title",
            body: "This is my blog"
        }
    }

    updatePost() {

    }

    deletePost() {
        console.log("hi there")
    }

    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
                <button onClick={() => this.deletePost()}>Delete Post</button>
            </div>
        )
    }
}