import React from 'react';
import './TextFormStateDefault.css';

function TextFormStateDefault() {


    return (
        <>
            <div className="text-form">
                <div className="text-form__container text-form__name">
                    <p className="text-form__title">Имя</p>
                    <p className="text-form__user-data text-form__user-data_name">Виталий</p>
                </div>
                <div className="text-form__container text-form__email">
                    <p className="text-form__title">E-mail</p>
                    <p className="text-form__user-data text-form__user-data_email">pochta@yandex.ru</p>
                </div>
            </div>
        </>
    )
}

export default TextFormStateDefault;