import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <>
            <div className="header__links-container">
                {props.children}
            </div>
        </>
    )
}

export default Navigation;