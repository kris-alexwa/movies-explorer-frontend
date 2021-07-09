import React from 'react';
import './Movies.css';

import { moviesApi } from '../../utils/MoviesApi';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { calcStartAmount } from '../../utils/calcStartAmount';
import NotFoundMovies from './NotFoundMovies/NotFoundMovies';
import Preloader from './Preloader/Preloader'
import { mainApi } from '../../utils/MainApi';

const emptyArray = [];

function Movies(props) {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [filterText, setFilterText] = React.useState('');
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    //Копипаст-исправить
    const [checked, setChecked] = React.useState(false);

    function handleChangeCheckbox() {
        setChecked(!checked)
    }

    const filteredMovies = filterText.length > 0 && moviesCards != null ? moviesCards.filter(movie => {
        return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
    }) : emptyArray;

    const checkboxFilterMoviesCard = filterText.length > 0 && moviesCards != null ? filteredMovies.filter(movie => {
        return movie.duration <= 40
    }) : emptyArray;

    React.useEffect(() => {
        if (localStorage.getItem('moviesCards')) {
            setMoviesCards(JSON.parse(localStorage.getItem('moviesCards')))
        } else {
            setIsLoading(true)
            moviesApi.getMoviesCards()
                .then(res => {
                    localStorage.setItem('moviesCards', JSON.stringify(res))
                    setMoviesCards(res)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    alert('Не удалось загрузить карточки')
                    setIsLoading(false)
                })
        }
    }, [])

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
                    alert('Не удалось загрузить карточки')
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
                    alert('Не удалось сохранить лайкнутые карточки')
                    console.log(err)
                })
        })
    }

    React.useEffect(() => {
        loadMovies()
    }, [])

    React.useEffect(() => {
        if (filteredMovies.length <= amount && checkboxFilterMoviesCard.length <= amount) {
            setBtnState(false)
        } else {
            setBtnState(true)
        }
    }, [filteredMovies, checkboxFilterMoviesCard, amount])

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
            country: movieCard.country,
            director: movieCard.director,
            duration: movieCard.duration,
            year: movieCard.year,
            description: movieCard.description,
            image: movieCard.image,
            trailer: movieCard.trailer,
            thumbnail: movieCard.thumbnail,
            nameRU: movieCard.nameRU,
            nameEN: movieCard.nameEN,
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

    //Копипаст-исправить
    const showNotFound = filteredMovies.length === 0 && checkboxFilterMoviesCard.length === 0 && filterText.length > 0;

    const filterCheckboxMovies = checked ? checkboxFilterMoviesCard : filteredMovies;

    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'} />
            <SearchForm handleSubmit={handleSubmit} filterMoviesCards={moviesCards} checked={checked} handleChangeCheckbox={handleChangeCheckbox} />
            {isLoading && <Preloader />}
            {showNotFound ? <NotFoundMovies /> : <MoviesCardList moviesCards={filterCheckboxMovies} amount={amount} itIsSavedMovies={false} handleMovieCardBtn={handleSavedMoviesBtn} />}
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

export default Movies;