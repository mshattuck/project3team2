import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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
        <div>
            <h4>Login</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <div className="col-3 col-mr-auto">
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
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="password">Password: </label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={loginState.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-7"></div>
                    <button
                        className="btn btn-primary col-1 col-mr-auto"

                        onClick={handleSubmit}
                        type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
