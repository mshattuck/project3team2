import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './login.css';

import { useStoreContext } from "../util/GlobalState";
import { SET_USER } from "../util/actions";

function LoginForm() {
    const [store, dispatch] = useStoreContext();

    const history = useHistory();
    const [loginState, setLoginState] = useState({
        username: '',
        password: '',
        redirectTo: null
    });

    const handleChange = (event) => {
        setLoginState({
            ...loginState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: loginState.username,
                password: loginState.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    const user = response.data;
                    console.log('user: ', user);

                    dispatch({ type: SET_USER, user });

                    // update the state to redirect to home
                    history.push('/home');
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    return (
        <div className='login-form'>
            <h1 className='signup-title'>Login</h1>
            <h2 className='signup-subtitle'>Welcome book lovers</h2>
            <form className="form-horizontal">
                <div className="form-group username">
                    <div className="col-12 col-md-5">
                        <input className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={loginState.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group password">
                    <div className="col-qw col-md-5">
                        <input className="form-input"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={loginState.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='button-holder'>
                    <div className="form-group col-md-5 d-flex justify-content-end">
                        <button
                            className="login-button btn btn-primary col-3 col-md-1 d-flex justify-content-center align-items-center"
                            onClick={handleSubmit}
                            type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
