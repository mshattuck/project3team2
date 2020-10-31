import React from 'react';
import './style.css';

function BookPageTitle() {
    return (
        <div className='row'>
            <div className='col-12'>
                <section className="book">
                    <div className='row d-flex justify-content-between align-items-center'> 
                        <div className='col'>
                            <div className='container-fluid book-info'>
                                <h1 className='book-name'>All the Light we Cannot See</h1>
                                <p className='book-text'>Author: Anthony Doerr</p>
                                <p className='book-text'>Award Year: 2015</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='container-fluid book-image'>
                                <img className='img-fluid' src='book-covers/all-the-light-we-cannot-see.png' alt='book cover' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BookPageTitle;
