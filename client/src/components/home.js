 
import React from 'react';
import Welcome from '../components/Welcome';
import Grid from '../components/Grid';
import AddBook from '../components/AddBook';
import './mainPages.css';

function Home() {
    return (
        <React.Fragment>
            <Welcome />
            <Grid />
            <AddBook />
        </React.Fragment>
    )
}

export default Home;