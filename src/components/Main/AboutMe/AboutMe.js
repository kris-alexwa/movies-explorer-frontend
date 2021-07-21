import React from 'react';

import './AboutMe.css';
import PhotoStudent from '../../../images/photo-student.jpg';

function AboutMe() {
    return(
        <>
        <section id="about-me" className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__wrapper">
                    <p className="about-me__name">Кристина</p>
                    <p className="about-me__prof">Фронтенд-разработчик, 24 года</p>
                    <p className="about-me__description">Родилась и до недавнего времени жила в Уфе. Совсем недавно мы с мужем переехали в Санкт-Петербург. Закончила юридический факультет Иститута Права БашГУ. Работала юрисконсультом в крупной компании, но около года назад решила начать изучать программирование и стать веб-разработчиком. </p>
                    <img className="about-me__photo" src={PhotoStudent} alt="Фото студента" ></img>
                    <ul className="about-me__list">
                        <li className="about-me__list-item"><a href="https://github.com/kris-alexwa" target="_blank" rel="noreferrer" className="about-me__link">Github</a></li>
                        <li className="about-me__list-item"><a href="https://vk.com/kris_sherlocked" target="_blank" rel="noreferrer" className="about-me__link">ВКонтакте</a></li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe;