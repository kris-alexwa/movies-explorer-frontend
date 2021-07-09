import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';
import NotFoundMovies from '../Movies/NotFoundMovies/NotFoundMovies';

function SavedMovies(props) {
    const [savedMovies, setSaveMovies] = React.useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        getSavedMovies();
    }, [])

    function getSavedMovies() {
        mainApi.getSavedMovies(props.token)
            .then((moviesCards) => {
                setSaveMovies(moviesCards)
            })
            .catch((err) => console.log(err))
    }

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

    const showNotFound = filteredSavedMovies.length === 0 && filterText.length > 0;

    return (
        <>
            <HeaderAuthUser itIsSavedMoviesPage={true} selectedLink={'savedMovies'} classNameSelected={'header__link_saved-movies'}/>
            <SearchForm handleSubmit={handleSubmit} filterMoviesCards={savedMovies} checked={checked} handleChangeCheckbox={handleChangeCheckbox}/>
            {showNotFound ? <NotFoundMovies /> : <MoviesCardList itIsSavedMovies={true} moviesCards={filteredSavedMovies} handleMovieCardBtn={handleDeleteMovieCard} />}
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

export default SavedMovies;