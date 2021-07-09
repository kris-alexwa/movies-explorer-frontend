import React from 'react';
import './Movies.css';

import { moviesApi } from '../../utils/MoviesApi';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { calcStartAmount } from '../../utils/calcStartAmount';
import Preloader from './Preloader/Preloader'
import { mainApi } from '../../utils/MainApi';
import MoviesErrorText from './MoviesErrorText/MoviesErrorText';

const emptyArray = [];

function Movies(props) {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [filterText, setFilterText] = React.useState('');
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [emptyFilterTextSubmitted, setEmptyFilterTextSubmitted] = React.useState(false);
    const [internalErrorHappened, setInternalErrorHappened] = React.useState(false)
    // const [errorText, setErrorText] = React.useState('');

    //Копипаст-исправить
    const [checked, setChecked] = React.useState(false);

    function handleChangeCheckbox() {
        setChecked(!checked)
    }

    const filteredMovies = filterMovies(moviesCards, checked, filterText, emptyArray)

    const moviesNotFound = filteredMovies.length === 0 && filterText.length > 0;

    function foo() {
        if (localStorage.getItem('moviesCards')) {
            return Promise.resolve(JSON.parse(localStorage.getItem('moviesCards')))
        } else {
            setIsLoading(true)
            return moviesApi.getMoviesCards()
                .then(res => {
                    localStorage.setItem('moviesCards', JSON.stringify(res))
                    setIsLoading(false)
                    return res
                })
                .catch(err => {
                    console.log(err)
                    setInternalErrorHappened(true)
                    setIsLoading(false)
                })
        }
    }

    function loadMovies() {
        const allMoviesPromise = foo()
        allMoviesPromise.then(allMovies => {
            mainApi.getSavedMovies(props.token)
                .then((savedMovies) => {
                    setMoviesCards(allMovies.map(movie => {
                        const foundSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId ===  movie.movieId)
                        if (foundSavedMovie != null) {
                            return { ...movie, saved: true, savedId: foundSavedMovie._id }
                        } else {
                            return { ...movie, saved: false }
                        }
                    }))
                })
                .catch(err => {
                    setInternalErrorHappened(true)
                    console.log(err)
                })
        })
    }

    React.useEffect(() => {
        loadMovies()
    }, [])

    React.useEffect(() => {
        if (filteredMovies.length <= amount) {
            setBtnState(false)
        } else {
            setBtnState(true)
        }
    }, [filteredMovies, amount])

    function handleBtnClick() {
        if (props.widthMode === 'desktop') {
            setAmount(amount + 3)
        } else if (props.widthMode === 'tablet') {
            setAmount(amount + 2)
        } else if (props.widthMode === 'mobile') {
            setAmount(amount + 1)
        }
    }

    function handleSubmit(value) {
        setFilterText(value)
        setAmount(calcStartAmount(props.widthMode))
    }

    function handleLikeMovieCard(movieId, savedId) {
        const newMovies = moviesCards.map(movie => {
            if (movie.movieId === movieId) {
                movie.saved = !movie.saved;
                movie.savedId = savedId;
                return movie
            } else {
                return movie
            }
        })

        setMoviesCards(newMovies)
    }

    function handleSavedMoviesBtn(movieCard) {
        const obj = {
            country: movieCard.country ?? 'unknown',
            director: movieCard.director,
            duration: movieCard.duration,
            year: movieCard.year,
            description: movieCard.description,
            image: movieCard.image,
            trailer: movieCard.trailer,
            thumbnail: movieCard.thumbnail,
            nameRU: movieCard.nameRU,
            nameEN: movieCard.nameEN || 'unknown',
            movieId: movieCard.movieId,
            owner: movieCard.owner,
        }
        if (!movieCard.saved) {
            mainApi.savedMovieCard(obj, props.token)
                .then((newLikedMovieCard) => {
                    handleLikeMovieCard(obj.movieId, newLikedMovieCard._id)
                })
                .catch((err) => {
                    alert('Данный фильм уже был добавлен в избранное')
                    console.log(err)
                })
        } else {
            mainApi.deleteMovieCard(movieCard.savedId, props.token)
                .then(() => {
                    handleLikeMovieCard(obj.movieId)
                })
                .catch((err) => {
                    alert('Не удалось удалить карточку')
                    console.log(err)
                })
        }

    }

    const errorText = createErrorText(emptyFilterTextSubmitted, moviesNotFound, internalErrorHappened)

    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'} />
            <SearchForm handleSubmit={handleSubmit} filterMoviesCards={moviesCards} checked={checked} handleChangeCheckbox={handleChangeCheckbox} setEmptyFilterTextSubmitted={setEmptyFilterTextSubmitted}/>
            {isLoading && <Preloader />}
            {/* {emptyFilterTextSubmitted && <EmptySearchForm />} */}
            {errorText && <MoviesErrorText errorText={errorText}/>}
            {!errorText && <MoviesCardList moviesCards={filteredMovies} amount={amount} itIsSavedMovies={false} handleMovieCardBtn={handleSavedMoviesBtn} />}
            
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

function createErrorText(emptyFilterTextSubmitted, moviesNotFound, internalErrorHappened) {
    if (emptyFilterTextSubmitted) {
        return 'Нужно ввести ключевое слово'
    } 

    if (moviesNotFound) {
        return "Ничего не найдено"
    }

    if (internalErrorHappened) {
        return "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
    }
}

function filterMovies(allMovies, onlyShorts, filterText, defaultValue) {
    if (allMovies == null || filterText.length === 0) {
        return defaultValue
    }

    return allMovies.filter(movie => {
        if (onlyShorts) {
            return movie.nameRU.toLowerCase().includes(filterText.toLowerCase()) && movie.duration <= 40
        } else {
            return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
        }
    })
}

export default Movies;