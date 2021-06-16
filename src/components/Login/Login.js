import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';

function Login() {
    return (
        <>
            <Auth title='Рады видеть!' text='Ещё не зарегистрированы?' linkText='Регистрация' route='/signup' button='Войти'>
                <div className="auth__form-item">
                    <label for="input-email" className="auth__label">E-mail</label>
                    <input id="input-email" type="email" className="auth__input"></input>

                </div>
                <div className="auth__form-item">
                    <label for="input-password" className="auth__label">Пароль</label>
                    <input id="input-password" type="password" className="auth__input"></input>
                </div>
            </Auth>
        </>
    )
}

export default Login;