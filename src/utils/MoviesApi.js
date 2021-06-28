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
    }

}

export const moviesApi = new MoviesApi({url: 'https://api.nomoreparties.co/beatfilm-movies'});