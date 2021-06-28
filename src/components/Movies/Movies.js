import React from 'react';
import './Movies.css';

// import MoviesCard from './MoviesCard/MoviesCard';
import { moviesApi } from '../../utils/MoviesApi';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import {calcStartAmount} from '../../utils/calcStartAmount';

function Movies(props) {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [amount, setAmount] = React.useState(calcStartAmount(props.widthMode));
    const [btnState, setBtnState] = React.useState(true)

    React.useEffect(() => {
        moviesApi.getMoviesCards()
          .then(res => setMoviesCards(res.slice(0, 20)))
          .catch(err => {
            console.log(err)
            alert('Не удалось загрузить карточки')
          })
      }, [])

    React.useEffect(() => {
        if (moviesCards.length <= amount) {
            setBtnState(false)
        } else {
            setBtnState(true)            
        }
    }, [moviesCards, amount])

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
            <HeaderAuthUser selectedLink={"movies"} classNameSelected={'header__link_movies'}/>
            <SearchForm />
            <MoviesCardList moviesCards={moviesCards} amount={amount} />
            {btnState && <button className='movies-card-list__btn' onClick={handleBtnClick}>Ещё</button>}
            <Footer />
        </>
    )
}

export default Movies;