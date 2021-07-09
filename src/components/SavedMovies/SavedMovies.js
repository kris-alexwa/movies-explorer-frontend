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

    function getSavedMovies() {
        mainApi.getSavedMovies(props.token)
            .then((moviesCards) => {
                setSaveMovies(moviesCards)
            })
            .catch((err) => console.log(err))
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

    const filteredSavedMovies = (filterText.length > 0 && savedMovies != null) || filterText.length === 0 ? savedMovies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
    }) : savedMovies;

    const checkboxFilterMoviesCard = filterText.length > 0 && savedMovies != null ? filteredSavedMovies.filter(movie => {
        return movie.duration <= 40
     }) : savedMovies;

    const showNotFound = filteredSavedMovies.length === 0 && filterText.length > 0;

    //Копипаст-исправить
    const [checked, setChecked] = React.useState(false);

    function handleChangeCheckbox() {
        setChecked(!checked)
    }

     const filterCheckboxMovies = checked ? checkboxFilterMoviesCard : filteredSavedMovies;

    return (
        <>
            <HeaderAuthUser itIsSavedMoviesPage={true} selectedLink={'savedMovies'} classNameSelected={'header__link_saved-movies'}/>
            <SearchForm handleSubmit={handleSubmit} filterMoviesCards={savedMovies} checked={checked} handleChangeCheckbox={handleChangeCheckbox}/>
            {showNotFound ? <NotFoundMovies /> : <MoviesCardList itIsSavedMovies={true} moviesCards={filterCheckboxMovies} handleMovieCardBtn={handleDeleteMovieCard} />}
            <Footer />
        </>
    )
}

export default SavedMovies;