import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { addPoint } from '../actions/index';

class MovieList extends Component {
  renderList() {
    return this.threeMovies().map((movie) => {
      const selectedNumber = parseInt(this.props.selectedNumber)
      const point = (movie.ranking === selectedNumber ? 1 : 0)

      return (
        <li
          key={movie.ranking}
          onClick={() => {
              this.props.addPoint(point)
          }}
          className='list-group-item'>
          {movie.title}
        </li>
      );
    });
  }

  generateRandom(excludeOne, excludeTwo) {
    const num = Math.floor(Math.random() * 100)
    if (num === excludeOne || num === excludeTwo) {
      return this.generateRandom(excludeOne, excludeTwo)
    } else {
      return num
    }
  }

  threeMovies() {
    const movies = this.props.movies;
    const selectedNumber = parseInt(this.props.selectedNumber);
    const randomNumberOne = this.generateRandom(selectedNumber, 0);
    const randomNumberTwo = this.generateRandom(selectedNumber, randomNumberOne);

    const selectMovies = [movies[selectedNumber], movies[randomNumberOne], movies[randomNumberTwo]];

    return _.shuffle(selectMovies);
  }

  render() {
    if (isNaN(this.props.selectedNumber)) {
      if (this.props.flash) {
        return <div>{this.props.flash}</div>
      } else {
        return <noscript />;
      }
    }

    return (
      <div>
        <p>Now select a movie that you think is in position number {this.props.selectedNumber} on the IMDB Top 100</p>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>

    )
  };
}

function mapStateToProps(state) {
  return {
    selectedNumber: state.selectedNumber,
    movies: state.movies,
    randomMovies: state.randomMovies,
    flash: state.flash
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPoint }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
