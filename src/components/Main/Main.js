import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ImageLead from '../../images/landing-logo.png';

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
                <section className="lead">
                    <div className="lead__container">
                        <h1 className="lead__text lead__text_title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className="lead__text lead__text_subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img className="lead__image" src={ImageLead} alt="Лого лендинг" />
                    <button className="lead__btn-see-more">Узнать больше</button>
                </section>

                <section className="about-project">
                    
                </section>
            </main>
        </>
    )
}

export default Main;