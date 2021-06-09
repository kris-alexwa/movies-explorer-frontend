import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom'; 
import Header from '../Header/Header';

function Main() {
    return (
        <>
            <Header>
                <nav class="header__links-container">
                    <Link to="/signup" className="header__link header__link_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link_login">Войти</Link>
                </nav>
            </Header>
        </>
    )
}

export default Main;