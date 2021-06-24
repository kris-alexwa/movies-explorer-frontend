import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import logoHeader from '../../images/logo/logo.svg';

function Auth(props) {
    return (
        <>
            <div className="auth">
                <Link to="/"><img className="auth__logo" src={logoHeader} alt="Логотип" /></Link>
                <h1 className="auth__title">{props.title}</h1>
                <form className="auth__form">
                    <div className="auth__form-container">
                        {props.children}
                    </div>
                    <button className="form__btn">{props.button}</button>
                </form>
                <div className="auth__wrapper">
                    <p className="auth__secondary-text">{props.text}</p>
                    &ensp;
                    <Link to={props.route} className="auth__secondary-link">{props.linkText}</Link>
                </div>
            </div>
        </>
    )
}

export default Auth;