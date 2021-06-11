import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__info-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__wrapper">
                        <p className="footer__date">&copy; 2021</p>
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="https://praktikum.yandex.ru" className="footer__link" target="_blank">Яндекс.Практикум</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="https://github.com/kris-alexwa" className="footer__link" target="_blank">Github</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="https://vk.com/kris_sherlocked" className="footer__link" target="_blank">ВКонтакте</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;