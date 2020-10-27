import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import './style.css';
import axios from 'axios'


class Header extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <header class=".navbar"> 
                {loggedIn ? (
                     <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
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

                <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
                    <img id="logo" src="home-logo.png" alt="dog eared logo" />
                </a>
                <img id='corner' src='folded-corner.png' alt='folded page corner' />
            </header>
        );

    }
}

export default Header;