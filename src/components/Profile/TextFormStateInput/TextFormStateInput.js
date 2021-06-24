import './TextFormStateInput.css';

function TextFormStateInput() {
    return (
        <>
            <form className="text-form text-form__form">
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">Имя</label>
                    <input className="text-form__user-data text-form__input text-form__name" placeholder='Виталий'></input>
                </div>
                <div className="text-form__container">
                    <label className="text-form__title text-form__title_label">E-mail</label>
                    <input className="text-form__user-data text-form__input text-form__email" placeholder="pochta@yandex.ru" ></input>
                </div>
                <button className="form__btn form__btn_save">Сохранить</button>
            </form>
        </>
    )
}

export default TextFormStateInput;