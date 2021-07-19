import React from 'react';
import './HeaderUnauth.css';
import Header from '../Header';
import { Link } from 'react-router-dom';

function HeaderUnauth() {
    return (
        <>
            <Header dark={true}>
                    <Link to="/signup" className="header__link header__link-auth header__link-auth_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link-auth header__link-auth_login">Войти</Link>
            </Header>
        </>
    )
}

export default HeaderUnauth;