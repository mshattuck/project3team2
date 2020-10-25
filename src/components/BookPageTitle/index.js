import React from 'react';
import './style.css';

function BookPageTitle() {
    return (
        <div class='row'>
            <div class='col-12'>
                <section class="book">
                    <div class='row d-flex justify-content-between align-items-center'> 
                        <div class='col'>
                            <div class='container-fluid book-info'>
                                <h1 class='book-name'>All the Light we Cannot See</h1>
                                <p class='book-text'>Anthony Doerr</p>
                                <p class='book-text'>Publication year</p>
                                <p class='book-text'>Award Year</p>
                            </div>
                        </div>
                        <div class='col-4'>
                            <div class='container-fluid book-image'>
                                <img class='img-fluid' src='book-covers/all-the-light-we-cannot-see.png' alt='book cover' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BookPageTitle;
