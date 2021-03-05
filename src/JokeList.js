import React, { Component } from 'react'
import Joke from './Joke'
import './JokeList.css'
import {v4 as uuid} from 'uuid';
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
            jokes.push({id:uuid(), text:jokeRes.data.joke, votes:0});
        }
        console.log(jokes);
        this.setState({
            jokes:jokes
        })
    }
    
    handelVote(id,delta){
        this.setState(st =>({
            jokes: st.jokes.map(j=>
                j.id === id ? {...j, votes: j.votes+delta}:j
            )
        }))
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
                        <Joke key={j.id} text={j.text} votes={j.votes}  downvote={()=> this.handelVote(j.id,-1)}
                        upvote={()=> this.handelVote(j.id,1)}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
