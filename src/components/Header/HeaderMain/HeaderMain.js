import React from 'react';
import './HeaderMain.css';
import Header from '../Header';
import { Link } from 'react-router-dom';

function HeaderAuthUser() {
    return (
        <>
            <Header dark={true}>
                    <Link to="/signup" className="header__link header__link-auth header__link-auth_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link-auth header__link-auth_login">Войти</Link>
            </Header>
        </>
    )
}

export default HeaderAuthUser;