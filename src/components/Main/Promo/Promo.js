import React from 'react';
import ImageLead from '../../../images/logo/landing-logo.png';
import './Promo.css';
import { Link} from "react-scroll";

function Promo() {
    return (
        <>
            <section className="promo">
                <div className="promo__container">
                    <div className="promo__text-wrapper">
                        <h1 className="promo__text promo__text_title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className="promo__text promo__text_subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img className="promo__image" src={ImageLead} alt="Лого лендинг" />
                    <Link to="about-me" smooth={true} duration={500} className="promo__link">
                        <button className="promo__btn-see-more">Узнать больше</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Promo;