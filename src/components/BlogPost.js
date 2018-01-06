import React, {Component} from "react";
import "./BlogPost.css"
import axios from "axios";

export default class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.post.title,
            body: props.post.body,
            id: props.post.id
        }
    }

    // componentWillReceiveProps(props) {
    //     console.log(props)
    //     this.setState({
    //         title: props.post.title,
    //         body: props.post.body,
    //         id: props.post.id
    //     })
    // }

    updatePost() {
        console.log(this.state.title)
        const updatedPost = {
            title: this.state.title,
            body: this.state.body,
            id: this.state.id
        }
        axios.put(`/api/posts/${this.state.id}`, updatedPost)
            .then(response => console.log(response)).catch(console.log)
    }

    deletePost() {
        axios.delete(`api/posts/${this.state.id}`)
            .then(response => this.props.callback(response.data)).catch(console.log)
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
                <p>Title</p>
                <input type="text" value={this.state.title} onChange={element => this.handleTitleChange(element.target.value)}/>
                <p>Body</p>
                <input type="text" value= {this.state.body} onChange={element => this.handleBodyChange(element.target.value)}/>
                <button onClick={() => this.deletePost()}>Delete Post</button>
                <button onClick={_ => this.updatePost()}>Update Post</button>
            </div>
        )
    }
}