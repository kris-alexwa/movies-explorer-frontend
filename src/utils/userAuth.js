export const BASE_URL = 'https://api.movie-kris.nomoredomains.club';
// export const BASE_URL = 'http://localhost:3000'
const checkResponse = (res) => res.ok ? res.json() : res.json().then(errBody => Promise.reject({status: res.status, message: errBody.message}))

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

//вернет 400 если не передано одно из полей, 401 - пользователь с email не найден
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(checkResponse)
        .then((data) => {
            localStorage.setItem('token', data.token)
            return data
        })
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(checkResponse);
}