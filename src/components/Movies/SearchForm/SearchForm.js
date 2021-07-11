import React from 'react';
import './SearchForm.css';
import searchIconGray from '../../../images/icons/search-icon.svg';
import searchIconWhite from '../../../images/icons/search-icon-white.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [value, setValue] = React.useState(props.initialValue || '');

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmitValue(value) {
        props.handleSubmit(value);
        if (props.setEmptyFilterTextSubmitted) {
            props.setEmptyFilterTextSubmitted(value === '')
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitValue(value)
    }


    React.useEffect(() => {
        if (!props.restoreFromLocalStorage) {
            return;
        }

        const value = localStorage.getItem('moviesFilterText');
        if (value) {
            setValue(value)
            handleSubmitValue(value)
        }
       
    }, [])

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form__wrapper">
                    <div className="search-form__container">
                            <img className="search-form__icon search-form__icon_visibility" src={searchIconGray} alt="Иконка поиска"></img>
                            <input className="search-form__input" placeholder="Фильм" value={value} onChange={handleChange}></input>
                        <button type='submit' className="search-form__btn">
                            <img className="search-form__icon search-form__icon_white-theme" src={searchIconWhite} alt="Иконка поиска"></img>
                        </button>
                    </div>
                    <FilterCheckbox filterMoviesCards={props.filterMoviesCards} checked={props.checked} handleChangeCheckbox={props.handleChangeCheckbox} />
                </div>
            </form>
        </>
    )
}

export default SearchForm;