import React from 'react';
import BookStack from '../BookStack';
import BookComments from '../BookComments';

function BookGrid() {
    return (
        <div class='book-grid row d-flex justify-content-center align-items-top'>
            <div class='col-12 col-md-6 book-stack'>
                < BookStack />
            </div>
            <div class='col-12 col-md-6 book-comments'>
                < BookComments />
            </div>
        </div>
    )
}

export default BookGrid;