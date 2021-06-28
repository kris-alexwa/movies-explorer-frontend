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

    const linkClassName = "header__link"
    const linkSelectedClassName = linkClassName + ` ${props.classNameSelected}`

    return (
        <>
            <div className={props.classNamePopup}>
                    {Object.values(links).map(link => (<Link to={link.url} className={link.selected ? linkSelectedClassName : linkClassName} key={link.url}>{link.title}</Link>))}
            </div>
        </>
    )
}

export default HeaderDesctopLink;