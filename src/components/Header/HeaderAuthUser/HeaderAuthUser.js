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

    const burgerMenuState =`header__burger-menu ${props.dark ? 'header__burger-menu_light' : 'header__burger-menu_dark'}`

    return (
        <>
            <HeaderMobileLink classNamePopup={classNamePopup} handleClickBurgerBtn={handleClickBurgerBtn} selectedMobileLink={props.selectedMobileLink} />
            <Header dark={props.dark}>
                <button className={burgerMenuState} onClick={handleClickBurgerBtn}></button>
                <nav className="header__links">
                    <HeaderDesctopLink selectedLink={props.selectedLink} classNameSelected={props.classNameSelected} dark={props.dark}/>
                </nav>
                <AccountBtn dark={props.dark}/>
            </Header>
        </>
    )
}

export default HeaderAuthUser;