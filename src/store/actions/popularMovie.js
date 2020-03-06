
import useFetch from '../../utils/fetch';
import { GET_POPULAR_MOVIES, ADD_ERROR } from '../actionTypes';

export const GetPopularMovies = async (dispatch, pageNum) => {
  try {
    const response = await useFetch('get', `https://api.themoviedb.org/3/movie/popular${pageNum ? `?page=${pageNum}` : ''}`);
    if (response && response.data) {
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: response.data,
      });
    } else if (response && response.data === undefined) {
      dispatch({
        type: ADD_ERROR,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message,
    });
  }
};

export const DoNothing = async () => { };
