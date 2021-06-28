import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { moviesApi } from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [moviesCards, setMovieCards] = React.useState([])
  const [widthMode, setWidthMode] = React.useState(calcWidthMode());
  const [showMoviesAmount, setShowMoviesAmount] = React.useState(calcStartAmount());

  function calcStartAmount() {
    if (widthMode === 'desktop') {
      return 12;
    } else if (widthMode === 'tablet') {
      return 8;
    } 
    return 5;
  }

  function calcWidthMode() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width >= 1024) {
      return 'desktop'
    } else if (width >= 768) {
      return 'tablet'
    } else {
      return 'mobile'
    }
  }

  React.useEffect(() => {
    moviesApi.getMoviesCards()
      .then(res => setMovieCards(res))
      .catch(err => {
        console.log(err)
        alert('Не удалось загрузить карточки')
      })
  }, [])


  React.useEffect(() => {
    window.addEventListener('resize', function () {
      setWidthMode(calcWidthMode())
    })
  })


  return (
    <div className="body">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/movies">
            <Movies moviesCards={moviesCards} amount={showMoviesAmount} setAmount={setShowMoviesAmount} widthMode={widthMode} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
