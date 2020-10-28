 
import Welcome from '../components/Welcome';
import Grid from '../components/Grid';
import AddBook from '../components/AddBook';
import React, { Component } from 'react'

/* function Home() {
    return (
        <React.Fragment>
            < Welcome />
            < Grid />
            < AddBook />
        </React.Fragment>
    )
}

export default Home; */



class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>DOGEAR'D Welcome</p>
           
            </div>



        )

    }
}

export default Home
