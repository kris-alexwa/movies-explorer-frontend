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

    getSavedMovies() {
        return fetch(this.url + "/movies", {
            method: "GET",
            headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjYzE4ODZmNmMyOTFlNjEwNjcyNWYiLCJpYXQiOjE2MjUwODAyMTQsImV4cCI6MTYyNTY4NTAxNH0.CpY7szRgdyol-OhWkIL6X0fib_0i5si5NlC2vgX5Oyg` },
        })
        .then(this._checkResponse)
    }

    savedMovieCard(movieCard) {
        return fetch(this.url + "/movies", {
                method: "POST",
                headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjYzE4ODZmNmMyOTFlNjEwNjcyNWYiLCJpYXQiOjE2MjUwODAyMTQsImV4cCI6MTYyNTY4NTAxNH0.CpY7szRgdyol-OhWkIL6X0fib_0i5si5NlC2vgX5Oyg` },
                body: JSON.stringify(movieCard)
            })
            .then(this._checkResponse)
    }

    
    deleteMovieCard(id) {
        return fetch(this.url + "/movies/" + id, {
                method: "DELETE",
                headers: {...this.headers, 'Content-Type': 'application/json', 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjYzE4ODZmNmMyOTFlNjEwNjcyNWYiLCJpYXQiOjE2MjUwODAyMTQsImV4cCI6MTYyNTY4NTAxNH0.CpY7szRgdyol-OhWkIL6X0fib_0i5si5NlC2vgX5Oyg` },
            })
            .then(this._checkResponse)
    }

}

export const mainApi = new MainApi({url: 'https://api.movie-kris.nomoredomains.club'});
// export const mainApi = new MainApi({url: 'http://localhost:3000'});