import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import { GetPopularMovies } from './store/actions/popularMovie';


const App = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => ({
    popularMovies: state.popularMovies.data,
    error: state.error,
  }));
  useEffect(() => {
    GetPopularMovies(dispatch);
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo w-64" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={() => GetPopularMovies(dispatch, popularMovies.page + 1)}> get more</button>
      </header>
    </div>
  );
};

export default App;
