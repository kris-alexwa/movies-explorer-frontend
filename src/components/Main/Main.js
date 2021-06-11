import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
            <Header>
                <nav class="header__links-container">
                    <Link to="/signup" className="header__link header__link_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link_login">Войти</Link>
                </nav>
            </Header>
            <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;