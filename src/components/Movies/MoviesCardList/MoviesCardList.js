import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return (
        <>
            <section className="movies-card-list">
                <ul className="movies-card-list__container">
                    {props.moviesCards.slice(0, props.amount).map(moviesCard => (<MoviesCard key={moviesCard.id} imageMovie={moviesCard.image.url} titleMovie={moviesCard.nameRU} timingMovie={moviesCard.duration} />))}
                </ul>
            </section>
        </>
    )
}

export default MoviesCardList;