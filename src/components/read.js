import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

//Read Class Extending Component
class Read extends Component
{
    //Method
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            this.setState({mymovies:response.data.movies})
        })
        //Showing Error
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