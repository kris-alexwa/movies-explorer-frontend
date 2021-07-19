export default class MoviesApi {
    constructor(options) {
        this.url = options.url;
        this.headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMoviesCards() {
        return fetch(this.url, {
            headers: this.headers
        })
        .then(this._checkResponse)
        .then((moviesCards) => {
            const convertedRes = moviesCards.map(movieCard => ({
                country: movieCard.country,
                director: movieCard.director,
                duration: movieCard.duration,
                year: movieCard.year,
                description: movieCard.description,
                image: 'https://api.nomoreparties.co' + movieCard.image.url,
                trailer: movieCard.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + movieCard.image.formats.thumbnail.url,
                nameRU: movieCard.nameRU,
                nameEN: movieCard.nameEN,
                movieId: movieCard.id,
            }))
            return convertedRes;
        })
    }
}

export const moviesApi = new MoviesApi({url: 'https://api.nomoreparties.co/beatfilm-movies'});
// export const moviesApi = new MoviesApi({url: 'http://localhost:3000'});
