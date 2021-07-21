import React from 'react';
import './Header.css';
import logoHeader from '../../images/logo/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    const headerClassName = props.dark ? "header header__dark-theme" : "header";

    return (
        <>
            <header className={headerClassName}>
                <div className="header__container">
                    <Link to="/"><img className="header__logo" src={logoHeader} alt="Логотип" /></Link>
                    <div className="header__links-container">
                        {props.children}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;