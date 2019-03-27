import React, {Component} from 'react';
import axios from 'axios';


class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/movies').then(response => {
 
    this.setState({movies: response.data.results});
  })
    }
   practiceClick(){
       this.setState(state => {
        console.log('clicked');
       })
       
   }
render(){
    console.log(this.state.movies);
    return(
        <div>
            <button onClick={this.practiceClick}>click me</button>
        </div>
    )
}
}

export default SearchBar