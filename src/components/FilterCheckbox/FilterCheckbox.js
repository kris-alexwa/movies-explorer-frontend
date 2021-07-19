import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <>
                    <div className="search-form__checkbox checkbox">
                        <input className="checkbox__btn" type="checkbox" checked={props.checked} onChange={props.handleChangeCheckbox}></input>
                        <h3 className="checkbox__title">Короткометражки</h3>
                    </div>
        </>
    )
}

export default FilterCheckbox;