export default class MainApi {
    constructor(options) {
        this.url = options.url;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMoviesCard() {
        
    }

}

export const mainApi = new MainApi({url: 'https://api.movie-kris.nomoredomains.club'});