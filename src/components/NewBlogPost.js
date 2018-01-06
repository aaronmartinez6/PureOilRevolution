import React, { Component } from "react";
import "./NewBlogPost.css";
import axios from "axios";

export default class NewBlogPost extends Component {
    constructor() {
        super()
        this.state = {
            title: "Blog Title",
            body: "This is my blog"
        }
    }

    addNewPost() {
        // const newBlogPost = {
        //     title: this.state.title,
        //     author: this.state.author
        // }

        // axios.post()
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter blog title" />
                <input type="text" placeholder="What's up?" />
                <button onClick={() => this.addNewPost()}>Create</button>
            </div>
        )
    }
}