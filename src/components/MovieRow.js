import React, { Component } from 'react';
import './App.css'
import axios from 'axios'


class MovieRow extends Component {
    viewMovie(){
        console.log(this.props.movie.title);
        const url = "https://www.themoviedb.org/movie/" +this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <div>
                <table key={this.props.movie.id}>
                    <tbody>
                        <tr>
                            <td>
                                <img className="img" src={this.props.movie.poster_src} alt="poster" />
                            </td>
                            <td>
                                <h3>{this.props.movie.title}</h3>
                                <p>{this.props.movie.overview}</p>
                                <input className="btn btn-secondary"type = "button" value="view" onClick ={this.viewMovie.bind(this)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MovieRow