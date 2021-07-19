import React from 'react';
import '../CommonStyles/searchFormError.css';

function EmptySearchForm(props) {
    return (
        <>
            <p className="search-form-error">Нужно ввести ключевое слово</p>
        </>
    )
}

export default EmptySearchForm;