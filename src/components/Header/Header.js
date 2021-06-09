import React from 'react';
import './Header.css';
import logoHeader from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    return(
        <>
        <div className="header">
            <div className="header__container">
                <Link to="/"><img className="header__logo" src={logoHeader} alt="Логотип" /></Link>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Header;