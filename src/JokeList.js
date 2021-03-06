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
            jokes:JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        this.handelClick = this.handelClick.bind(this);
    }

    componentDidMount(){
        if(this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes(){
        try{
            let jokes = [];

            while(jokes.length < this.props.numJokes){
                let jokeRes = await axios.get("http://icanhazdadjoke.com", {headers:{Accept:"application/JSON"}});

                let newJoke = jokeRes.data.joke;
                if(!this.seenJokes.has(newJoke)){
                    jokes.push({id:uuid(), text:newJoke, votes:0});
                }
                else{
                    console.log("Duplicate joke");
                    console.log(newJoke);
                }
            }

            this.setState(st => ({
                jokes:[...st.jokes, ...jokes],
                loading:false
            }),()=> window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));

            window.localStorage.setItem(
                "jokes",
                JSON.stringify(jokes)
            )
        }
        catch(e){
            alert(e);
            this.setState({loading:false})
        }
    }

    handelClick(){
        this.setState({loading:true}, this.getJokes)
    }
    
    handelVote(id,delta){
        this.setState(st =>({
            jokes: st.jokes.map(j=>
                j.id === id ? {...j, votes: j.votes+delta}:j
            )
        }),()=> window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
    }

    render() {
        if(this.state.loading){
            return(
                <div className="JokeList-loader">
                    <i className="fa fa-smile-o fa-5x fa-spin"></i>
                    <h1 className="JokeList-title">LOADING...</h1>
                </div>
            )
        }
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="smiley"/>
                    <button className="JokeList-getmore" onClick={this.handelClick}>FETCH JOKES</button>
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
