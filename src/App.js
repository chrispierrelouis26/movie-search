import React, { Component } from 'react';
import './app.css'
// import axios from 'axios'
import MovieRow from './components/MovieRow'
import $ from 'jquery'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {}

  this.performSearch("us")
  
  }
 performSearch(searchTerm){
   const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=b3762064a00a0a4104bb2b911b9da5a5&query=" + searchTerm
   $.ajax({
    url: urlString,
    success: (searchResults) => {
      console.log('fetched data sucessfully')
      console.log(searchResults);
      const results = searchResults.results
      // console.log(results[0])
      

      var movieRows =[]

      results.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
        // console.log(movie.poster_path)
        const movieRow = <MovieRow key ={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })
      this.setState({rows: movieRows})
    },
  error: (xhr, status, err) => {
    console.error('failed to fetch data')
  }
   })
  console.log("perform this search using moviedb");
 }

 searchChangeHandler(event){
   console.log(event.target.value)
  const bound = this
   const searchTerm = event.target.value
  bound.performSearch(searchTerm)
 }


  render() {
    return (
 <div className ="App">
 <table className ="title">
  <tbody>
    <tr>
      <td>
        <img className ="img"src = "../images/cinema-reel.png" alt ="app icon"/>
      </td>
      
      <td>
       <h1 className="h1">Movies Search</h1>
      </td>
    </tr>
  </tbody>
 </table>

 
 <input
  className ="input" 
  placeholder = "Enter your movie"
  onChange = {this.searchChangeHandler.bind(this)}
  />
{this.state.rows}
 </div>
    )
  }
}

export default App;