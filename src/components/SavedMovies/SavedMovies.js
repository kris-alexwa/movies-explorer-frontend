import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';
import MoviesErrorText from '../Movies/MoviesErrorText/MoviesErrorText';

function SavedMovies(props) {
    const [savedMovies, setSaveMovies] = React.useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [internalErrorHappened, setInternalErrorHappened] = React.useState(false)

    function getSavedMovies() {
        mainApi.getSavedMovies(props.token)
            .then((moviesCards) => {
                setSaveMovies(moviesCards)
            })
            .catch((err) => setInternalErrorHappened(true))
    }

    React.useEffect(() => {
        getSavedMovies();
    }, [])

    function handleDeleteMovieCard(movieCardId) {
        mainApi.deleteMovieCard(movieCardId, props.token)
            .then(() => {
                getSavedMovies();
            })
            .catch((err) => {
                alert('Не удалось удалить карточку')
                console.log(err)
            })
    }

    function handleSubmit(value) {
        setFilterText(value)
    }

    function handleChangeCheckbox() {
        setChecked(!checked)
    }

    const filteredSavedMovies = filterMovies(savedMovies, checked, filterText, savedMovies)

    const moviesNotFound = filteredSavedMovies.length === 0 && filterText.length > 0;
    const noMoviesAdded = savedMovies != null && savedMovies.length === 0;

    const errorText = createErrorText(moviesNotFound, internalErrorHappened, noMoviesAdded)

    return (
        <>
            <HeaderAuthUser itIsSavedMoviesPage={true} selectedLink={'savedMovies'} selectedMobileLink={'savedMovies'} dark={false} classNameSelected={'header__link_saved-movies'}/>
            <SearchForm handleSubmit={handleSubmit} filterMoviesCards={savedMovies} checked={checked} handleChangeCheckbox={handleChangeCheckbox}/>
            {errorText && <MoviesErrorText errorText={errorText}/>}
            {!errorText && <MoviesCardList itIsSavedMovies={true} moviesCards={filteredSavedMovies} handleMovieCardBtn={handleDeleteMovieCard} />}
            <Footer />
        </>
    )
}

function filterMovies(allMovies, onlyShorts, filterText, defaultValue) {
    if (allMovies == null) {
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

function createErrorText(moviesNotFound, internalErrorHappened, noMoviesAdded) { 
    if (moviesNotFound) {
        return "Ничего не найдено"
    }

    if (internalErrorHappened) {
        return "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
    }

    if (noMoviesAdded) {
        return "Нет сохраненных фильмов :("
    }
}

export default SavedMovies;