import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return(
        <>
            <section className="error-page">
                <h2 className="error-page__title">404</h2>
                <p className="error-page__text">Страница не найдена</p>
                <Link to="/" className="error-page__back-btn">Назад</Link>
            </section>
        </>
    )
}

export default ErrorPage;