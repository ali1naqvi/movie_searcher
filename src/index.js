import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies.js";
import './style.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie Searcher</h1>
        <SearchMovies/>
      </div>
  );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));