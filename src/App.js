import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './components/SearchBar'




class App extends Component {
  constructor(){
    super()
    this.state = {
      movieList : []
    }
  }
componentWillMount(){
  axios.get('http://localhost:3001/api/movies').then(response => {
 
    this.setState({movieList: response.data.results});
  })
}
handleSearchClick(){
  this.setState(state => ({
  }))
}
  render() {
    console.log(this.state.movieList);
   //mapping through array of movies to render each one using .map()
   // map method can have two paramas, create one for movie and index of array
   const imgURL = "http://image.tmdb.org/t/p/original"
   const movies = this.state.movieList.map((movie, index)=> {
      return (

        <div className ="movie-card" >
          <SearchBar />
        <img  src ={`${imgURL}${movie.poster_path}`} style = {{height: '80%', width: '100%'}} alt ='today'></img>
        <p>{movie.title}</p>
        <p>Rating: {movie.vote_average}/10</p>
        </div>
      )
   })
    return (
      
      <div className="App">
    {movies}
      </div>
    );
  }
}

export default App;