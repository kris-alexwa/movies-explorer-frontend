import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';

function Login() {
    return (
        <>
            <Auth title='Рады видеть!' text='Ещё не зарегистрированы?' linkText='Регистрация' route='/signup' button='Войти'>
                <div className="auth__form-item">
                    <label className="auth__label">E-mail</label>
                    <input type="email" className="auth__input" required={true}></input>

                </div>
                <div className="auth__form-item">
                    <label className="auth__label">Пароль</label>
                    <input type="password" className="auth__input" required={true}></input>
                </div>
            </Auth>
        </>
    )
}

export default Login;