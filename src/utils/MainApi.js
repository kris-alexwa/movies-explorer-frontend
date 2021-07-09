export default class MainApi {
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

    getSavedMovies(token) {
        return fetch(this.url + "/movies", {
            method: "GET",
            headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        .then(this._checkResponse)
    }

    savedMovieCard(movieCard, token) {
        return fetch(this.url + "/movies", {
                method: "POST",
                headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(movieCard)
            })
            .then(this._checkResponse)
    }

    
    deleteMovieCard(id, token) {
        return fetch(this.url + "/movies/" + id, {
                method: "DELETE",
                headers: {...this.headers, 'Authorization': `Bearer ${token}` },
            })
            .then(this._checkResponse)
    }

    getUserInfo(token) {
        return fetch(this.url + "/users/me", {
                headers: {...this.headers, 'Authorization': `Bearer ${token}` }
            })
            .then(this._checkResponse)
    }

    updateUserInfo(data, token) {
        return fetch(this.url + "/users/me", {
                method: 'PATCH',
                headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email
                })
            })
            .then(this._checkResponse)
    }

}

export const mainApi = new MainApi({url: 'https://api.movie-kris.nomoredomains.club'});
