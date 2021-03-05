import React, { Component } from 'react'
import './Joke.css'

export class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fa fa-arrow-up" onClick={this.props.upvote}></i>
                    <span className="Joke-vote">{this.props.votes}</span>
                    <i className="fa fa-arrow-down" onClick={this.props.downvote}></i>
                </div>
                <div className="Joke-text">
                    {this.props.text}
                </div>
                <div className="Joke-emoji">
                    <i class="em em-rolling_on_the_floor_laughing"></i>
                </div>
            </div>
        )
    }
}

export default Joke
