import React from 'react';
import BookStack from '../BookStack';
import BookComments from '../BookComments';

function BookGrid() {
    return (
        <div className='main'>
            <div className='row book-grid'>
                <div className='col-md-6 book-stack'>
                    < BookStack />
                </div>
                <div className='col-md-6 book-comments'>
                    < BookComments />
                </div>
            </div>
        </div>
        
    )
}

export default BookGrid;