import { GET_POPULAR_MOVIES } from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_MOVIES:
      if (state.data.results) payload.results.unshift(...state.data.results);
      return { ...state, data: payload };
    default:
      return state;
  }
};
