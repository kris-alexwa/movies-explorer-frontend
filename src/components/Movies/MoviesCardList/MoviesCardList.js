import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {

    return (
        <>
            <section className="movies-card-list">
                <ul className="movies-card-list__container">
                    {props.moviesCards.slice(0, props.amount).map(moviesCard => (<MoviesCard key={moviesCard.movieId} movieCardId={moviesCard._id} movieCard={moviesCard} imageMovie={moviesCard.image} titleMovie={moviesCard.nameRU} 
                    timingMovie={moviesCard.duration} itIsSavedMovies={props.itIsSavedMovies} handleMovieCardBtn={props.handleMovieCardBtn} />))}
                </ul>
            </section>
        </>
    )
}

export default MoviesCardList;