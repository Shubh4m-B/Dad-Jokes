import React, { Component } from 'react'
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
                <h1>Dad Jokes</h1>
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
