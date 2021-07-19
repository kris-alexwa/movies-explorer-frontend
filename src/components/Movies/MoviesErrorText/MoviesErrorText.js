import React from 'react';
import './MoviesErrorText.css';

function MoviesErrorText(props) {
    return (
        <>
            <p className="error-text">{props.errorText}</p>
        </>
    )
}

export default MoviesErrorText;