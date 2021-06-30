import React from 'react';
import './Movies.css';

// import MoviesCard from './MoviesCard/MoviesCard';
import { moviesApi } from '../../utils/MoviesApi';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { calcStartAmount } from '../../utils/calcStartAmount';

const emptyArray = [];

function Movies(props) {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [filterText, setFilterText] = React.useState('');
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true)
    console.log(moviesCards)
    const filteredMovies = filterText.length > 0 && moviesCards != null ? moviesCards.filter(movie => {
        return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
    }) : emptyArray;

    React.useEffect(() => {
        if (localStorage.getItem('moviesCards')) {
           setMoviesCards(JSON.parse(localStorage.getItem('moviesCards')))
        } else {
            moviesApi.getMoviesCards()
            .then(res => {
                localStorage.setItem('moviesCards', JSON.stringify(res))
                setMoviesCards(res)
            })
            .catch(err => {
                console.log(err)
                alert('Не удалось загрузить карточки')
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

    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'} />
            <SearchForm setFilterText={setFilterText} />
            <MoviesCardList moviesCards={filteredMovies} amount={amount} />
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

export default Movies;