import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);
    const likeCardClassName = `movie-card__like-btn movie-card__btn ${isLiked ? 'movie-card__like-btn_active' : '' }`;

    function handleLikeCard(event) {
        event.preventDefault();
        props.handleMovieCardBtn(props.movieCard)
        setIsLiked(!isLiked)
    }

    function handleDeleteCard(event) {
        event.preventDefault();
        props.handleMovieCardBtn(props.movieCardId)
    }

    const button = props.itIsSavedMovies ? 
    <button type="button" className="movie-card__btn movie-card__delete-btn" onClick={handleDeleteCard}></button> : 
    <button type='submit' className={likeCardClassName} onClick={handleLikeCard}></button>;

    const movieCardClassName = props.itIsSavedMovies ? 'movie-card movie-card__saved' : 'movie-card';

    return (
        <>
            <li className={movieCardClassName}>
                <img className="movie-card__image" src={props.imageMovie} alt="Обложка фильма"></img>
                <div className="movie-card__wrapper">
                    <h2 className="movie-card__title">{props.titleMovie}</h2>
                    {button}
                    <p className="movie-card__timing">{props.timingMovie}</p>
                </div>
            </li>
        </>
    )
}

export default MoviesCard;