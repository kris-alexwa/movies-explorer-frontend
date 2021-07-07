import React from 'react';
import './Profile.css';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import TextFormStateDefault from './TextFormStateDefault/TextFormStateDefault';
import TextFormStateInput from './TextFormStateInput/TextFormStateInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);

    function handleEditProfile() {
        setIsEdit(!isEdit)
    }

    function handleUpdateProfile(newUserInfo) {
        setIsLoading(true)
        mainApi.updateUserInfo(newUserInfo, props.token)
          .then((res) => {
            props.setCurrentUser({ name: res.name, email: res.email, id: res._id })
            handleEditProfile()
            setIsLoading(false)
            setIsEdit(false)
          })
          .catch((err) => {
            alert('Не удалось обновить информацию пользователя')
            console.log(err)
            setIsLoading(false)
          })
      }

    const textFormState = isEdit ? <TextFormStateInput onUpdateUserInfo={handleUpdateProfile} isLoading={isLoading} /> : <TextFormStateDefault />;
    const editBtnCLassName = isEdit ? 'profile__btn_visibility' : 'profile__btn profile__edit-btn';
    const exitBtnClassName = isEdit ? 'profile__btn_visibility' : 'profile__btn profile__exit-btn';

    // console.log(currentUser)

    return (
        <>
            <HeaderAuthUser selectedLink={'movies'} classNameSelected={'header__links_profile'} />
            <section className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, {`${currentUser.name}`}!</h2>
                    {textFormState}
                    <button className={editBtnCLassName} onClick={handleEditProfile}>Редактировать</button>
                    <button className={exitBtnClassName} onClick={props.signOut}>Выйти из аккаунта</button>
                </div>

            </section>
        </>
    )
}

export default Profile;