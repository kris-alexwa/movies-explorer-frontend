import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute';
import * as userAuth from '../../utils/userAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [widthMode, setWidthMode] = React.useState(calcWidthMode());
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const token = localStorage.getItem('token');

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
    let timeoutId = null;
    window.addEventListener('resize', function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidthMode(calcWidthMode()), 150)
    })
  }, [])

  const history = useHistory();

  function handleRegister(name, email, password) {
    return userAuth.register(name, email, password)
      .then(() => {
        userAuth.authorize(email, password)
          .then(() => {
            setLoggedIn(true)
            history.push('/movies')
          })
      })
  }

  function handleLogin(email, password) {
    return userAuth.authorize(email, password).then((res) => {
      setLoggedIn(true)
      history.push('/movies')
    })
  }

  React.useEffect(() => {
    if (!loggedIn) {
      return;
    }
    mainApi.getUserInfo(token)
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email, id: res._id })
      })
      .catch((err) => {
        alert('Не удалось загрузить информацию о пользователе')
        console.log(err)
      })
  }, [loggedIn, token])

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        userAuth.getContent(token)
        .then((res) => {
            if (res) {
                setLoggedIn(true)
                history.push('/movies')
            }
        })
        .catch((err) => {
            localStorage.removeItem('token')
            setLoggedIn(false)
        })
    }
}, [loggedIn, history])

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false)
    history.push('/')
  }

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <ProtectedRoute path="/movies" widthMode={widthMode} loggedIn={loggedIn} component={Movies} token={token}></ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} token={token}></ProtectedRoute>
            <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} signOut={signOut} token={token} setCurrentUser={setCurrentUser}A>
            </ProtectedRoute>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/signin">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register onRegister={handleRegister} userData={setCurrentUser} />
            </Route>
            <Route>
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
