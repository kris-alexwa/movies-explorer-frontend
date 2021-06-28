import React from 'react';
import './Movies.css';

import MoviesCard from './MoviesCard/MoviesCard';
import imageMovies1 from '../../images/imageMovies-1.jpg';
import imageMovies2 from '../../images/imageMovies-2.jpg';
import imageMovies3 from '../../images/imageMovies-3.jpg';
import imageMovies4 from '../../images/imageMovies-4.jpg';
import imageMovies5 from '../../images/imageMovies-5.jpg';
import imageMovies6 from '../../images/imageMovies-6.jpg';
import imageMovies7 from '../../images/imageMovies-7.jpg';
import imageMovies8 from '../../images/imageMovies-8.jpg';
import imageMovies9 from '../../images/imageMovies-9.jpg';
import imageMovies10 from '../../images/imageMovies-10.jpg';
import imageMovies11 from '../../images/imageMovies-11.jpg';
import imageMovies12 from '../../images/imageMovies-12.jpg';

import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'}/>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard imageMovie={imageMovies1} titleMovie={"33 слова о дизайне"} timingMovie={'1ч 47м'} />
                <MoviesCard imageMovie={imageMovies2} titleMovie={"Киноальманах «100 лет дизайна»"} timingMovie={'1ч 3м'} />
                <MoviesCard imageMovie={imageMovies3} titleMovie={"В погоне за Бенкси"} timingMovie={'1ч 42м'} />
                <MoviesCard imageMovie={imageMovies4} titleMovie={"Баския: Взрыв реальности"} timingMovie={'1ч 21м'} />
                <MoviesCard imageMovie={imageMovies5} titleMovie={"Бег это свобода"} timingMovie={'1ч 44м'} />
                <MoviesCard imageMovie={imageMovies6} titleMovie={"Книготорговцы"} timingMovie={'1ч 37м'} />
                <MoviesCard imageMovie={imageMovies7} titleMovie={"Когда я думаю о Германии ночью"} timingMovie={'1ч 56м'} />
                <MoviesCard imageMovie={imageMovies8} titleMovie={"Gimme Danger: История Игги и The Stooge..."} timingMovie={'1ч 21м'} />
                <MoviesCard imageMovie={imageMovies9} titleMovie={"Дженис: Маленькая девочка грустит"} timingMovie={'1ч 42м'} />
                <MoviesCard imageMovie={imageMovies10} titleMovie={"Соберись перед прыжком"} timingMovie={'1ч 10м'} />
                <MoviesCard imageMovie={imageMovies11} titleMovie={"Пи Джей Харви: A dog called money"} timingMovie={'1ч 4м'} />
                <MoviesCard imageMovie={imageMovies12} titleMovie={"По волнам: Искусство звука в кино"} timingMovie={'1ч 7м'} />
            </MoviesCardList>
            <button className="movies-card-list__btn">Ещё</button>
            <Footer />
        </>
    )
}

export default Movies;