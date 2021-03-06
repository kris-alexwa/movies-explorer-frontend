import React from 'react';
import './Portfolio.css';
import ArrowIcon from '../../../images/icons/arrow.svg';

function Portfolio() {
    return (
        <>
            <section className="portfolio">
                <div className="portfolio__container">
                    <h2 className="portfolio__title">Портфолио</h2>
                    <ul className="portfolio__list">
                        <li className="portfolio__list-item">
                            <a href="https://kris-alexwa.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">
                                <p className="portfolio__link-title">Статичный сайт</p>
                                <img className="portfolio__link-icon" src={ArrowIcon} alt="Иконка стрелка"></img>
                            </a>
                        </li>
                        <li className="portfolio__list-item">
                            <a href=" https://kris-alexwa.github.io/russian-travel/index.html" target="_blank" rel="noreferrer" className="portfolio__link">
                                <p className="portfolio__link-title">Адаптивный сайт</p>
                                <img className="portfolio__link-icon" src={ArrowIcon} alt="Иконка стрелка"></img>
                            </a>
                        </li>
                        <li className="portfolio__list-item">
                            <a href="https://mesto-kris.nomoredomains.icu/sign-in" target="_blank" rel="noreferrer" className="portfolio__link">
                                <p className="portfolio__link-title">Одностраничное приложение</p>
                                <img className="portfolio__link-icon" src={ArrowIcon} alt="Иконка стрелка"></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Portfolio;