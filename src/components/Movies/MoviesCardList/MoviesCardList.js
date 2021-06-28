import React from 'react';
import './MoviesCardList.css';


function MoviesCardList(props) {
    return(
        <>
        <section className="movies-card-list">
            <ul className="movies-card-list__container">
                {props.children}
            </ul>
        </section>
        </>
    )
}

export default MoviesCardList;