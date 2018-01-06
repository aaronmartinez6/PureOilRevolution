import React, { Component } from "react";
import "./Quote.css"
import axios from "axios"

export default class Quote extends Component {
    constructor() {
        super()
        this.state = {
            text: "awesome quote",
            author: "-Aaron Martinez"
        }
    }

    componentWillMount() {
        axios.get(`http://quotes.rest/qod.json?category=inspire`)
            .then(response => this.setState({
                text: response.data.contents.quotes[0].quote,
                author: `- ${response.data.contents.quotes[0].author}`
            })
            ).catch(console.log)
    }

    render() {
        return (
            <div>
                <h3>Quote of the day:</h3>
                <p>{this.state.text}</p>
                <p>{this.state.author}</p>
            </div>
        )
    }
}