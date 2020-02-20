import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MoviesReducer from './reducer_movies';
import ScoreReducer from './reducer_score';
import selectedNumberReducer from './reducer_selected_number';
import flashReducer from './reducer_flash';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  score: ScoreReducer,
  form: formReducer,
  selectedNumber: selectedNumberReducer,
  flash: flashReducer
});

export default rootReducer;
