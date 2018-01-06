import React, { Component } from "react";
import "./NewBlogPost.css";
import axios from "axios";

export default class NewBlogPost extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         title: "Blog Title",
    //         body: "This is my blog"
    //     }
    // }

    addNewPost() {
        const newBlogPost = {
            title: this.state.title,
            body: this.state.body
        }

        axios.post(`/api/posts`, newBlogPost)
            .then(response => this.props.callBack(response.data))
            .catch(console.log)
    }

    handleTitleChange(val) {
        this.setState({
            title: val
        })
    }

    handleBodyChange(val) {
        this.setState({
            body: val
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter blog title"
                    onChange={element => this.handleTitleChange(element.target.value)} />
                <input
                    type="text"
                    placeholder="What's up?"
                    onChange={element => this.handleBodyChange(element.target.value)} />
                <button onClick={_ => this.addNewPost()}>
                    Create
                    </button>

            </div>
        )
    }
}