import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

//Read Class Extending Component
class Read extends Component
{
    //Method Retrieve server.js
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies:response.data.mymovies})
        })
        //Catches Error
        .catch((error)=>{
            console.log(error);     
        });
    }

    state={
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h2>This is my Read Component</h2>
                {/* //Embedding Movies */}
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;