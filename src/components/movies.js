import React, { Component } from 'react';
import Movieitem from './movieitem';

//Movies Class Extending Component
class Movies extends Component
{
    render(){
        return this.props.films.map((film)=>{

            //Returns Movieitem 
            return <Movieitem myfilm={film} key={film.imdbID}></Movieitem>
        });
    }
}
export default Movies;