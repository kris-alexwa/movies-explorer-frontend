import React from 'react';
import './TextFormStateDefault.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function TextFormStateDefault() {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <div className="text-form">
                <div className="text-form__container text-form__name text-form__container_state-default">
                    <p className="text-form__title">Имя</p>
                    <p className="text-form__user-data text-form__user-data_name">{currentUser.name}</p>
                </div>
                <div className="text-form__container text-form__email text-form__container_state-default">
                    <p className="text-form__title">E-mail</p>
                    <p className="text-form__user-data text-form__user-data_email">{currentUser.email}</p>
                </div>
            </div>
        </>
    )
}

export default TextFormStateDefault;