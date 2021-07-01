import React from 'react';
import './Movies.css';

import { moviesApi } from '../../utils/MoviesApi';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { calcStartAmount } from '../../utils/calcStartAmount';
import NotFoundMovies from './NotFoundMovies/NotFoundMovies';
import Preloader from './Preloader/Preloader'
import { mainApi } from '../../utils/MainApi';

const emptyArray = [];

function Movies(props) {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [filterText, setFilterText] = React.useState('');
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    const filteredMovies = filterText.length > 0 && moviesCards != null ? moviesCards.filter(movie => {
        return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
    }) : emptyArray;

    const showNotFound = filteredMovies.length === 0 && filterText.length > 0;

    React.useEffect(() => {
        if (localStorage.getItem('moviesCards')) {
            setMoviesCards(JSON.parse(localStorage.getItem('moviesCards')))
        } else {
            setIsLoading(true)
            moviesApi.getMoviesCards()
                .then(res => {
                    localStorage.setItem('moviesCards', JSON.stringify(res))
                    setMoviesCards(res)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    alert('Не удалось загрузить карточки')
                    setIsLoading(false)
                })
        }
    }, [])

    React.useEffect(() => {
        if (filteredMovies.length <= amount) {
            setBtnState(false)
        } else {
            setBtnState(true)
        }
    }, [filteredMovies, amount])

    function handleBtnClick() {
        if (props.widthMode === 'desktop') {
            setAmount(amount + 3)
        } else if (props.widthMode === 'tablet') {
            setAmount(amount + 2)
        } else if (props.widthMode === 'mobile') {
            setAmount(amount + 1)
        }
    }

    function handleSubmit(value) {
        setFilterText(value)
        setAmount(calcStartAmount(props.widthMode))
    }

    function handleSavedMoviesBtn(movieCard) {
        mainApi.savedMovieCard(movieCard)
            .then((movieCard) => console.log(movieCard))
            .catch((err) => console.log(err))
    }


    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'} />
            <SearchForm handleSubmit={handleSubmit} />
            {isLoading && <Preloader />}
            {showNotFound ? <NotFoundMovies /> : <MoviesCardList moviesCards={filteredMovies} amount={amount} itIsSavedMovies={false} handleMovieCardBtn={handleSavedMoviesBtn} />}
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

export default Movies;