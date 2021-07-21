import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';

function Login(props) {
    const [emailInputError, setEmailInputError] = React.useState(null);
    const [passwordInputError, setPasswordInputError] = React.useState(null);

    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const [errorText, setErrorText] = React.useState('');

    function handleEmailInputChange(event) {
        setEmailInputError(event.target.validationMessage)
        const { value } = event.target;
        setUserData({
            ...userData,
            email: value
        })
    }

    function handlePasswordInputChange(event) {
        setPasswordInputError(event.target.validationMessage)
        const { value } = event.target;
        setUserData({
            ...userData,
            password: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userData.email || !userData.password) {
            return;
        }
        props.onLogin(userData.email, userData.password)
            .catch((err) => setErrorText(err.message))
    }

    return (
        <>
            <Auth handleSubmit={handleSubmit} title='Рады видеть!' text='Ещё не зарегистрированы?' linkText='Регистрация' route='/signup' button='Войти' errorText={errorText}>
                <div className="auth__form-item">
                    <label className="auth__label">E-mail</label>
                    <input type="email" className="auth__input" required onChange={handleEmailInputChange}></input>
                    <span className="auth__input-error">{emailInputError}</span>
                </div>
                <div className="auth__form-item">
                    <label className="auth__label">Пароль</label>
                    <input type="password" className="auth__input" required onChange={handlePasswordInputChange}></input>
                    <span className="auth__input-error">{passwordInputError}</span>
                </div>
            </Auth>
        </>
    )
}

export default Login;