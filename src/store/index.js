import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));
  return store;
};

export default configureStore;
