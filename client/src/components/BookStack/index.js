import React from 'react';
import BookPageTitle from '../BookPageTitle';
import BookMatches from '../BookMatches';

function BookStack() {
    return (
        <React.Fragment>
            <BookPageTitle />
            <BookMatches />     
        </React.Fragment>
    )
}

export default BookStack;