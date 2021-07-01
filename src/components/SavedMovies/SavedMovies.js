import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';

function SavedMovies(props) {
    const [savedMovies, setSaveMovies] = React.useState([]);

    function getSavedMovies() {
        mainApi.getSavedMovies()
            .then((moviesCards) => setSaveMovies(moviesCards))
            .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getSavedMovies();
    }, [])

    function handleDeleteMovieCard(movieCardId) {
        mainApi.deleteMovieCard(movieCardId)
            .then(() => {
                getSavedMovies();
            })
            .catch((err) => {
                alert('Не удалось удалить карточку')
                console.log(err)
            })
    }

    return (
        <>
            <HeaderAuthUser itIsSavedMoviesPage={true} selectedLink={'savedMovies'} classNameSelected={'header__link_saved-movies'}/>
            <SearchForm />
            <MoviesCardList itIsSavedMovies={true} moviesCards={savedMovies} handleMovieCardBtn={handleDeleteMovieCard} />
            <Footer />
        </>
    )
}

export default SavedMovies;