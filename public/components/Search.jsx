import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    };
  }

  handleSearch(e) {
    e.preventDefault();
    const endpoint = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.API_KEY}&s=${this.refs.title.value}`;
    console.log(endpoint);
    return fetch(endpoint)
      .then(blob => blob.json())
      .then(data => this.setState({
        result: data
      }))
      .catch(err => err.message)
  }

  render() {
    return (
      <div>
        <div className='center-content'>
          <h1>Search For A Movie</h1>
          <form  onSubmit={this.handleSearch.bind(this)}>
            <input type='text' ref='title' placeholder='Title of movie' />
            <button>Movie Search</button>
          </form>
        </div>
        {
          (this.state.result.Response === 'True') ?
          <SearchResults searched={this.state.result}/> : null
        }
      </div>
    );
  }
}

class SearchResults extends Component {

  render() {
    const result = this.props.searched.Search;
    const content = (movie) => {
      return (
        <div key={movie.imdbID}>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          {
            movie.Poster !== 'N/A' ?
            <img src={movie.Poster} alt={movie.Title} /> :
            <h3>Image not available</h3>
          }
        </div>
      )
    }
    return (
      <div>
        { result.map(content) }
      </div>
    );
  }
}

export default Search;
