import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const likeCardClassName = `movie-card__like-btn movie-card__btn ${props.movieCard.saved ? 'movie-card__like-btn_active' : ''}`;

    function handleLikeCard(event) {
        event.preventDefault();
        props.handleMovieCardBtn(props.movieCard)
    }

    function handleDeleteCard(event) {
        event.preventDefault();
        props.handleMovieCardBtn(props.movieCardId)
    }

    const button = props.itIsSavedMovies ?
        <button type="submit" className="movie-card__btn movie-card__delete-btn" onClick={handleDeleteCard}></button> :
        <button type='submit' className={likeCardClassName} onClick={handleLikeCard}></button>;

    const movieCardClassName = props.itIsSavedMovies ? 'movie-card movie-card__saved' : 'movie-card';

    const durationMovie = Math.trunc(props.movieCard.duration / 60) + "ч " + props.movieCard.duration % 60 + 'м';

    return (
        <>
            <li className={movieCardClassName}>
                <a target="_blank" rel="noreferrer" href={props.movieCard.trailer}><img className="movie-card__image" src={props.movieCard.image} alt="Обложка фильма"></img></a>
                <div className="movie-card__wrapper">
                    <h2 className="movie-card__title">{props.movieCard.nameRU}</h2>
                    {button}
                    <p className="movie-card__timing">{durationMovie}</p>
                </div>
            </li>
        </>
    )
}

export default MoviesCard;