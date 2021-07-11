import React from 'react';
import { Link } from 'react-router-dom';

function HeaderDesctopLink(props) {
    const links = {
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

    links[props.selectedLink].selected = true

    const linkClassName = props.dark ? "header__link header__link_light" : "header__link header__link_dark"
    const linkSelectedClassName = linkClassName + ` ${props.classNameSelected}`;
    

    return (
        <>
            <div className={props.classNamePopup}>
                    {Object.values(links).map(link => (<Link to={link.url} className={link.selected ? linkSelectedClassName : linkClassName} key={link.url}>{link.title}</Link>))}
            </div>
        </>
    )
}

export default HeaderDesctopLink;