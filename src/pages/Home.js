import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Grid from '../components/Grid';
import AddBook from '../components/AddBook';

function Home() {
    return (
        <React.Fragment>
            < Header />
            < Welcome />
            < Grid />
            < AddBook />
        </React.Fragment>
    )
}

export default Home;