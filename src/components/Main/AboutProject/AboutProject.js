import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <>
            <section className="intro">
                <div className="intro__container">
                    <h2 className="intro__title">О проекте</h2>
                    <div className="intro__description-wrapper">
                        <div className="intro__descripton-container">
                            <h3 className="intro__title-paragraph">Дипломный проект включал 5 этапов</h3>
                            <p className="intro__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>
                        <div className="intro__descripton-container">
                            <h3 className="intro__title-paragraph">На выполнение диплома ушло 5 недель</h3>
                            <p className="intro__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                        </div>
                    </div>
                    <div className="intro__progress-bar progress-bar">
                        <div className="progress-bar__part progress-bar__part_primary">
                            <p className="progress-bar__title progress-bar__primary-title">1 неделя</p>
                        </div>
                        <p className="progress-bar__subtitle progress-bar__primary-subtitle">Back-end</p>
                        <div className="progress-bar__part progress-bar__part_secondary">
                            <p className="progress-bar__title progress-bar__secondary-title">4 недели</p>
                        </div>
                        <p className="progress-bar__subtitle progress-bar__secondary-subtitle">Front-end</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutProject;