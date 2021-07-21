import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {

    return (
        <>
            <section className="movies-card-list">
                <ul className="movies-card-list__container">
                    {props.moviesCards.slice(0, props.amount).map(moviesCard => (<MoviesCard key={moviesCard.movieId} likedMovie={props.likedMovie} movieCardId={moviesCard._id} button={props.button} movieCard={moviesCard} 
                    itIsSavedMovies={props.itIsSavedMovies} handleMovieCardBtn={props.handleMovieCardBtn} />))}
                </ul>
            </section>
        </>
    )
}

export default MoviesCardList;