import React from 'react';
import './Profile.css';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import TextFormStateDefault from './TextFormStateDefault/TextFormStateDefault';
import TextFormStateInput from './TextFormStateInput/TextFormStateInput';

function Profile() {
    const [isEdit, setIsEdit] = React.useState(false);

    function handleEditProfile() {
        setIsEdit(!isEdit)
    }

    const textFormState = isEdit ? <TextFormStateInput /> : <TextFormStateDefault />;
    const editBtnCLassName = isEdit ? 'profile__btn_visibility' : 'profile__btn profile__edit-btn';
    const exitBtnClassName = isEdit ? 'profile__btn_visibility' : 'profile__btn profile__exit-btn';

    return (
        <>
            <HeaderAuthUser selectedLink={'movies'} classNameSelected={'header__links_profile'} />
            <section className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, Виталий!</h2>
                    {textFormState}
                    <button className={editBtnCLassName} onClick={handleEditProfile}>Редактировать</button>
                    <button className={exitBtnClassName}>Выйти из аккаунта</button>
                </div>

            </section>
        </>
    )
}

export default Profile;