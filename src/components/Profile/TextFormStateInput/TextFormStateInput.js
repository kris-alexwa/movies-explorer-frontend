import React from 'react';
import './TextFormStateInput.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function TextFormStateInput(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [emailInputError, setEmailInputError] = React.useState(null);
    const [nameInputError, setNameInputError] = React.useState(null);
    const [formValid, setFormValid] = React.useState(false);
    const formRef = React.useRef();

    React.useEffect(() => {
        setUserName(currentUser?.name ?? '');
        setUserEmail(currentUser?.email ?? '')
    }, [currentUser, props.isEdit]);

    function handleChangeName(event) {
        setUserName(event.target.value)
        setNameInputError(event.target.validationMessage)
    }

    function handleChangeEmail(event) {
        setUserEmail(event.target.value)
        setEmailInputError(event.target.validationMessage)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUserInfo({
            name: nameRef.current.value,
            email: emailRef.current.value,
        })
    }

    function validate() {
        setFormValid(formRef.current.checkValidity())
    }

    function handleFormChange() {
        validate()
    }

    const submitBtnText = 'Сохранить'
    const submitBtnTextLoading = "Сохранение..."

    const submitTetx = props.isLoading ? submitBtnTextLoading : submitBtnText;

    return (
        <>
            <form className="text-form text-form__form" onSubmit={handleSubmit} ref={formRef} onChange={handleFormChange}>
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">Имя</label>
                    <input name="name" type="text" minLength="2" maxLength="30" pattern="^[a-zA-zа-яА-Я0-9\s\-]+$" required className="text-form__user-data text-form__input text-form__name" ref={nameRef} value={userName} onChange={handleChangeName}></input>
                </div>
                <span className="auth__input-error">{nameInputError}</span>
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">E-mail</label>
                    <input type="email" className="text-form__user-data text-form__input text-form__email" ref={emailRef} value={userEmail} onChange={handleChangeEmail} ></input>
                </div>
                <span className="auth__input-error">{emailInputError}</span>
                <div className="text-form__wrapper">
                    <span className="auth__error-message">{props.errorText}</span>
                    <button type="submit" className="form__btn form__btn_save" disabled={!formValid} >{submitTetx}</button>
                </div>
            </form>
        </>
    )
}

export default TextFormStateInput;