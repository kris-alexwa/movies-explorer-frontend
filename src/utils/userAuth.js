// export const BASE_URL = 'https://api.movie-kris.nomoredomains.club';
export const BASE_URL = 'http://localhost:3000';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
        .then(checkResponse);
}