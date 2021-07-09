import React from 'react';
import './SearchForm.css';
import searchIconGray from '../../../images/icons/search-icon.svg';
import searchIconWhite from '../../../images/icons/search-icon-white.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [value, setValue] = React.useState('');

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        props.handleSubmit(value);
        event.preventDefault();
    }

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