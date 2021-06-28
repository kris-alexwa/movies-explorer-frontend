import React from 'react';
import './MoviesCardList.css';


function MoviesCardList(props) {
    return(
        <>
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {props.children}
            </div>
        </section>
        </>
    )
}

export default MoviesCardList;