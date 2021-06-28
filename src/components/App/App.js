import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  // Отрисовка карточек на странице
  const [widthMode, setWidthMode] = React.useState(calcWidthMode());

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
            <Movies widthMode={widthMode} />
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
