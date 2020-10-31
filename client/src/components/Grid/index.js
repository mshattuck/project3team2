import React from 'react';
import './style.css';
import AuthorofWeek from '../AuthorofWeek';
import MyBooks from '../MyBooks';


function Grid() {
    return (
        <div className='row grid'>
            <div className='col-12 col-md-6 author-of-week'>   
                <AuthorofWeek />
            </div>
            <div className='col-12 col-md-6 my-books-fragment'>
                <MyBooks />
            </div>
        </div>
    )
}

export default Grid;
