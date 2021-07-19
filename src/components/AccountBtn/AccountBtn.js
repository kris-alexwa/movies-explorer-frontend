import React from 'react';
import './AccountBtn.css';
import { Link } from 'react-router-dom';
import AccountIconDarkTheme from '../../images/icons/icon-account.svg';
import AccountIconWhiteTheme from '../../images/icons/icon-account-white-theme.svg';

function AccountBtn(props) {
    const classNameLinkAccountBtn = `header__link-account ${props.itIsMobile ? 'header__link-account_mobile-menu' : ''}`
    const classNameAccountBtn = `header__btn-account ${props.dark ? 'header__btn-account_light' : 'header__btn-account_dark'}`

    const accountIcon = props.dark ? AccountIconWhiteTheme : AccountIconDarkTheme;

    return (
        <>
            <Link to='/profile' className={classNameLinkAccountBtn}>
                <button className={classNameAccountBtn}><img src={accountIcon} className="header__account-icon" alt='Иконка аккаунта' />Аккаунт</button>
            </Link>
        </>
    )
}

export default AccountBtn;