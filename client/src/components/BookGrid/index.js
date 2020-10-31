import React from 'react';
import BookStack from '../BookStack';
import BookComments from '../BookComments';

function BookGrid() {
    return (
        <div className='book-grid row d-flex justify-content-center align-items-top'>
            <div className='col-12 col-md-6 book-stack'>
                < BookStack />
            </div>
            <div className='col-12 col-md-6 book-comments'>
                < BookComments />
            </div>
        </div>
    )
}

export default BookGrid;