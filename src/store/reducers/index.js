import { combineReducers } from 'redux';
import popularMovieReducer from './popularMovie';
import errorReducer from './error';

const rootReducer = combineReducers({
  popularMovies: popularMovieReducer,
  error: errorReducer,
});

export default rootReducer;
