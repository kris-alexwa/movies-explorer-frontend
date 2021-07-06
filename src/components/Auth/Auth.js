import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import logoHeader from '../../images/logo/logo.svg';

function Auth(props) {
    const [formValid, setFormValid] = React.useState(false);
    const formRef = React.useRef();

    function validate() {
        setFormValid(formRef.current.checkValidity())
    }

    function handleFormChange() {
        validate()
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    return (
        <>
            <div className="auth">
                <Link to="/"><img className="auth__logo" src={logoHeader} alt="Логотип" /></Link>
                <h1 className="auth__title">{props.title}</h1>
                <form className="auth__form" ref={formRef} onChange={handleFormChange} onSubmit={props.handleSubmit} noValidate>
                    <div className="auth__form-container">
                        {props.children}
                    </div>
                    <button type="submit" className="form__btn" disabled={!formValid}>{props.button}</button>
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