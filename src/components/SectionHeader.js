import React, {Component} from "react";
import "./SectionHeader.css"

export default class SectionHeader extends Component {
    render() {
        return (
            <div className= "SectionHeader"> 
                <h1 className= "SectionHeaderText">{this.props.title}</h1>
            </div>
        )
    }
}