import React, { Component }  from 'react';
import Score from './score';
import NumberInput from './number_input';
import MovieList from './movie_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <NumberInput />
        <MovieList />
      </div>
    )
  };
}
