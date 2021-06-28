import React from 'react';
import './AccountBtn.css';
import { Link } from 'react-router-dom';
import AccountIcon from '../../images/icons/icon-account.svg';

function AccountBtn(props) {
    const classNameAccountBtn = `header__link-account ${props.itIsMobile ? 'header__link-account_mobile-menu' : ''}`
    return (
        <>
            <Link to='/profile' className={classNameAccountBtn}>
                <button className="header__btn-account"><img src={AccountIcon} className="header__account-icon" alt='Иконка аккаунта' />Аккаунт</button>
            </Link>
        </>
    )
}

export default AccountBtn;