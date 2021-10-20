import React, { Component } from 'react';

//Create Class Extending Component
class Create extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    //methods
    handleSubmit(event) {
        alert('Movie Name: ' +this.state.Title +
        ' Movie Year: '+ this.state.Year +
        ' Movie Poster: '+ this.state.Poster)

        //Stops from refreshing temporarly
        event.preventDefault(); 

        this.setState({
            Title:'',
            Year:'',
            Poster:''
        })
    }

    onChangeMovieName(event){
        this.setState({
            Title:event.target.value
        })
    }

    onChangeMovieYear(event){
        this.setState({
            Year:event.target.value
        })
    }

    onChangeMoviePoster(event){
        this.setState({
            Poster:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>This is my Create Component</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    {/* Adding Input Boxes */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    <div>
                        <input type="submit"
                            value="Add Movie"
                            className="btn btn-primary">
                        </input>
                    </div>

                </form>
            </div>
        );
    }
}
export default Create;