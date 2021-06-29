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
    const [value, setValue] = React.useState('');
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true)

    const filteredMovies = value.length > 0 ? moviesCards.filter(movie => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase())
    }) : emptyArray;

    React.useEffect(() => {
        moviesApi.getMoviesCards()
            .then(res => setMoviesCards(res.slice(0, 20)))
            .catch(err => {
                console.log(err)
                alert('Не удалось загрузить карточки')
            })
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

    function handleInputChange(event) {
        setValue(event.target.value);
    }


    return (
        <>
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'} />
            <SearchForm handleChange={handleInputChange}/>
            <MoviesCardList moviesCards={filteredMovies} amount={amount} />
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

export default Movies;