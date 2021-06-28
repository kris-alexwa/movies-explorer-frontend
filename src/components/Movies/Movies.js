import React from 'react';
import './Movies.css';

import MoviesCard from './MoviesCard/MoviesCard';

import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
    function handleBtnClick() {
        if (props.widthMode === 'desktop') {
            props.setAmount(props.amount + 3)
        } else if (props.widthMode === 'tablet') {
            props.setAmount(props.amount + 2)
        } else if (props.widthMode === 'mobile') {
            props.setAmount(props.amount + 1)
        }
    }

    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'}/>
            <SearchForm />
            <MoviesCardList>
                {props.moviesCards.slice(0, props.amount).map(moviesCard => (<MoviesCard key={moviesCard.id} imageMovie={moviesCard.image.url} titleMovie={moviesCard.nameRU} timingMovie={moviesCard.duration} />))}
            </MoviesCardList>
            <button className="movies-card-list__btn" onClick={handleBtnClick}>Ещё</button>
            <Footer />
        </>
    )
}

export default Movies;