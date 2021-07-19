import React from 'react';
import { Link } from 'react-router-dom';
import AccountBtn from '../../AccountBtn/AccountBtn';

function HeaderMobileLink(props) {
    const links = {
        main: {
            url: '/',
            title: 'Главная',
            selected: false
        },
        movies: {
            url: '/movies',
            title: 'Фильмы',
            selected: false
        },
        savedMovies: {
            url: '/saved-movies',
            title: 'Сохраненные фильмы',
            selected: false
        }
    }
    
    links[props.selectedMobileLink].selected = true

    const linkClassName = "header__link header__link-movies_movies header-popup__link"
    const linkSelectedClassName = linkClassName + " header-popup__link-mobile_selected"

    return (
        <>
            <div className={props.classNamePopup}>
                <nav className="header-popup__menu">
                    <button className="header-popup__close-btn" onClick={props.handleClickBurgerBtn}></button>
                    {Object.values(links).map(link => (<Link to={link.url} className={link.selected ? linkSelectedClassName : linkClassName} key={link.url}>{link.title}</Link>))}
                    <AccountBtn itIsMobile={true}/>
                </nav>
            </div>
        </>
    )
}

export default HeaderMobileLink;