import React, { Component } from 'react'
import './JokeList.css'
import axios from 'axios'

export class JokeList extends Component {

    static defaultProps = {
        numJokes : 10
    }
    
    constructor(props){
        super(props)
        this.state = {
            jokes:[]
        };
    }

    async componentDidMount(){
        let jokes = [];
        while(jokes.length < this.props.numJokes){
            let jokeRes = await axios.get("http://icanhazdadjoke.com", {headers:{Accept:"application/JSON"}});
            jokes.push(jokeRes.data.joke);
        }
        console.log(jokes);
        this.setState({
            jokes:jokes
        })
    }
    
    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="smiley"/>
                    <button className="JokeList-getmore">New Joke</button>
                </div>
               
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <div>{j}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
