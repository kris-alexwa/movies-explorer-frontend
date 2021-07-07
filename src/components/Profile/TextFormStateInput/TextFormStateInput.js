import React from 'react';
import './TextFormStateInput.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function TextFormStateInput(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');

    React.useEffect(() => {     
        setUserName(currentUser?.name ?? '');
        setUserEmail(currentUser?.email ?? '')
    }, [currentUser, props.isEdit]);

    function handleChangeName(event) {
        setUserName(event.target.value)
    }

    function handleChangeEmail(event) {
        setUserEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUserInfo({
            name: nameRef.current.value,
            email: emailRef.current.value,
        })
        
    }

    const submitBtnText = 'Сохранить'
    const submitBtnTextLoading = "Сохранение..."

    const submitTetx = props.isLoading ? submitBtnTextLoading : submitBtnText;

    return (
        <>
            <form className="text-form text-form__form" onSubmit={handleSubmit}>
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">Имя</label>
                    <input className="text-form__user-data text-form__input text-form__name" ref={nameRef} value={userName} onChange={handleChangeName}></input>
                </div>
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">E-mail</label>
                    <input className="text-form__user-data text-form__input text-form__email" ref={emailRef} value={userEmail} onChange={handleChangeEmail} ></input>
                </div>
                <button type="submit" className="form__btn form__btn_save" >{submitTetx}</button>
            </form>
        </>
    )
}

export default TextFormStateInput;