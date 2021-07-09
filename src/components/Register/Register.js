import React, {useCallback} from 'react';
import './Register.css';
import Auth from '../Auth/Auth';

function Register(props) {
    const [nameInputError, setNameInputError] = React.useState(null);
    const [emailInputError, setEmailInputError] = React.useState(null);
    const [passwordInputError, setPasswordInputError] = React.useState(null);
    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const [errorText, setErrorText] = React.useState('');

    // function useForm() {
//     const [values, setValues] = React.useState({});
//     const handleChange = (event) => {
//         const {value, name, email, password} = event.target;
//         setValues({...values, [name]: value, [email]: value, [password]: value })
//     }
//     return {values, handleChange, setValues}
// }

// function useFormWithValidation() {
//     const [values, setValues] = React.useState({});
//     const [errors, setErrors] = React.useState({});
//     const [isValid, setIsValid] = React.useState(false);

//     const handleChange = (event) => {
//         const {value, name, email, password} = event.target;
//         setValues({...values, [name]: value, [email]: value, [password]: value })
//         setErrors({...errors, [name]: event.target.validationMessage, [email]: event.target.validationMessage, [password]: event.target.validationMessage})
//         setIsValid(event.target.closest('form').checkValidity())
//     };

//     const resetForm = useCallback(
//         (newValues ={}, newErrors = {}, newIsValid = false) => {
//         setValues(newValues);
//         setErrors(newErrors);
//         setIsValid(newIsValid);
//     },
//         [setValues, setErrors, setIsValid]
//     );

//     return {values, handleChange, errors, isValid, resetForm}
// }

    function handleEmailInputChange(event) {
        setEmailInputError(event.target.validationMessage)
        const { value } = event.target;
        setUserData({
            ...userData,
            email: value
        })
    }

    function handleNameInputChange(event) {
        setNameInputError(event.target.validationMessage)
        const { value } = event.target;
        setUserData({
            ...userData,
            name: value
        })
    }

    function handlePasswordInputChange(event) {
        setPasswordInputError(event.target.validationMessage)
        const { value } = event.target;
        setUserData({
            ...userData,
            password: value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(userData.name, userData.email, userData.password)
            .catch((err) => {
                setErrorText(err.message)
            })
    }

    return (
        <>
            <Auth handleSubmit={handleSubmit} title='Добро пожаловать!' text='Уже зарегистрированы?' linkText='Войти' route='/signin' button='Зарегистрироваться' errorText={errorText} >
                <div className="auth__form-item">
                    <label className="auth__label">Имя</label>
                    <input name="name" type="text" value={userData.name} className="auth__input" required={true} minLength="2" maxLength="30" onChange={handleNameInputChange} ></input>
                    <span className="auth__input-error">{nameInputError}</span>
                </div>
                <div className="auth__form-item">
                    <label className="auth__label">E-mail</label>
                    <input type="email" value={userData.email} className="auth__input" required={true} onChange={handleEmailInputChange} ></input>
                    <span className="auth__input-error">{emailInputError}</span>
                </div>
                <div className="auth__form-item">
                    <label className="auth__label">Пароль</label>
                    <input type="password" value={userData.password} className="auth__input" required={true} onChange={handlePasswordInputChange}></input>
                    <span className="auth__input-error">{passwordInputError}</span>
                </div>
            </Auth>
        </>
    )
}

export default Register;