import React from 'react';
import './HeaderAuthUser.css';
import Header from '../Header';
import HeaderMobileLink from '../HeaderMobileLink/HeaderMobileLink';
import HeaderDesctopLink from '../HeaderDesctopLink/HeaderDesctopLink';
import AccountBtn from '../../AccountBtn/AccountBtn';

function HeaderAuthUser(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    function handleClickBurgerBtn() {
        setIsOpen(!isOpen)
    }

    const classNamePopup = `header-popup ${isOpen ? 'header-popup__visibility' : ''}`

    return (
        <>
            <HeaderMobileLink classNamePopup={classNamePopup} handleClickBurgerBtn={handleClickBurgerBtn} selectedLink={props.selectedLink} />
            <Header>
                <button className="header__burger-menu" onClick={handleClickBurgerBtn}></button>
                <nav className="header__links">
                    <HeaderDesctopLink selectedLink={props.selectedLink} classNameSelected={props.classNameSelected} />
                </nav>
                <AccountBtn />
            </Header>
        </>
    )
}

export default HeaderAuthUser;