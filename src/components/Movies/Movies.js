import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import AccountIcon from '../../images/icon-account.svg'
import SearchForm from './SearchForm/SearchForm';

function Movies() {
    return (
        <>
            <Header>
                <div className="header__links-container">
                    <nav className="header__links">
                        <Link to="/movies" className="header__link header__link-movies header__link-movies_movies">Фильмы</Link>
                        <Link to="/saved-movies" className="header__link header__link-movies header__link-movies_saved-movies">Сохранённые фильмы</Link>
                    </nav>
                    <Link to='/profile' className="header__link-account">
                        <button className="header__btn-account"><img src={AccountIcon} className="header__account-icon" alt='Иконка аккаунта'/>Аккаунт</button>
                    </Link>
                </div>
            </Header>
            <SearchForm />
        </>
    )
}

export default Movies;