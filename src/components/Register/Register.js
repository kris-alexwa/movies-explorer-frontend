import React from 'react';
import './Register.css';
import Auth from '../Auth/Auth';

function Register() {
    return (
        <>
            <Auth title='Добро пожаловать!' text='Уже зарегистрированы?' linkText='Войти' route='/signin' button='Зарегистрироваться'>
                <div className="auth__form-item">
                    <label className="auth__label">Имя</label>
                    <input type="text" className="auth__input" required={true}></input>
                    <span className="auth__input-error"></span>
                </div>
                <div className="auth__form-item">
                    <label className="auth__label">E-mail</label>
                    <input type="email" className="auth__input" required={true}></input>
                    <span className="auth__input-error"></span>
                </div>
                <div className="auth__form-item">
                    <label className="auth__label">Пароль</label>
                    <input type="password" className="auth__input" required={true}></input>
                    <span className="auth__input-error"></span>
                </div>
            </Auth>
        </>
    )
}

export default Register;