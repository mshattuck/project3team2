import React from 'react';
import './style.css';
import AuthorofWeek from '../AuthorofWeek';
import MyBooks from '../MyBooks';


function Grid() {
    return (
        <div class='row grid'>
            <div class='col-12 col-md-6 author-of-week'>   
                <AuthorofWeek />
            </div>
            <div class='col-12 col-md-6 my-books-fragment'>
                <MyBooks />
            </div>
        </div>
    )
}

export default Grid;
