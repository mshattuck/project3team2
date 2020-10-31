import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SET_LOGGED_IN, SET_USER } from "../../util/actions";
import { useStoreContext } from '../../util/GlobalState';
import axios from 'axios';
import './style.css';


function Header() {
  const [store, dispatch] = useStoreContext();

  useEffect(() => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        dispatch({ type: SET_USER, user: response.data.user });
        dispatch({ type: SET_LOGGED_IN, loggedIn: true });
      } else {
        console.log('Get user: no user');
        dispatch({ type: SET_LOGGED_IN, loggedIn: false });
      }
    })
  }, []);

  const logout = (event) => {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
          dispatch({ type: SET_LOGGED_IN, loggedIn: false });
          dispatch({ type: SET_USER, user: null });
        }
      }).catch(error => {
          console.log('Logout error')
      })
    }


    return (
        <header className=".navbar">
            {store.loggedIn ? (
                 <Link to="/login" className="btn btn-link text-secondary" onClick={logout}>
                 <span className="text-secondary">logout</span></Link>

            ): (
                <section className="navbar-section">
                    <Link to="/" className="btn btn-link text-secondary">
                        <span className="text-secondary">home</span>
                        </Link>
                    <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
</Link>
                    <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
</Link>
                </section>
            )}

            <a className="navbar-brand d-flex justify-content-center align-items-center" href="#">
                <img id="logo" src="home-logo.png" alt="dog eared logo" />
            </a>
            <img id='corner' src='folded-corner.png' alt='folded page corner' />
        </header>
    );
}

export default Header;