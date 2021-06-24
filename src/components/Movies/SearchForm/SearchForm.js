import React from 'react';
import './SearchForm.css';
import searchIconGray from '../../../images/icons/search-icon.svg';
import searchIconWhite from '../../../images/icons/search-icon-white.svg';

function SearchForm() {
    return (
        <>
            <form className="search-form">
                <div className="search-form__wrapper">
                    <div className="search-form__container">
                            <img className="search-form__icon search-form__icon_visibility" src={searchIconGray} alt="Иконка поиска"></img>
                            <input className="search-form__input" placeholder="Фильм"></input>
                        <button className="search-form__btn">
                            <img className="search-form__icon search-form__icon_white-theme" src={searchIconWhite} alt="Иконка поиска"></img>
                        </button>
                    </div>
                    <div className="search-form__checkbox checkbox">
                        <input className="checkbox__btn" type="checkbox"></input>
                        <h3 className="checkbox__title">Короткометражки</h3>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchForm;