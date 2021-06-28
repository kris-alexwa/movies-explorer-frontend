import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import imageMovies1 from '../../images/imageMovies-1.jpg';
import imageMovies2 from '../../images/imageMovies-2.jpg';
import imageMovies3 from '../../images/imageMovies-3.jpg';

function SavedMovies() {
    return (
        <>
            <HeaderAuthUser itIsSavedMoviesPage={true} selectedLink={'savedMovies'} classNameSelected={'header__link_saved-movies'}/>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard itIsSavedMovies={true} imageMovie={imageMovies1} titleMovie={"33 слова о дизайне"} timingMovie={'1ч 47м'} />
                <MoviesCard itIsSavedMovies={true} imageMovie={imageMovies2} titleMovie={"Киноальманах «100 лет дизайна»"} timingMovie={'1ч 3м'} />
                <MoviesCard itIsSavedMovies={true} imageMovie={imageMovies3} titleMovie={"В погоне за Бенкси"} timingMovie={'1ч 42м'} />
            </MoviesCardList>
            <Footer />
        </>
    )
}

export default SavedMovies;