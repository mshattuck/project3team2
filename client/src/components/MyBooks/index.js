import React from 'react';
import './style.css';
            
function MyBooks() {
    return (
        <React.Fragment>
            <div class='col d-flex justify-content-left title'>
                <h2>My Reads</h2>
            </div>
            <section class='my-books'>
                <div class='my-book-list'>
                    <div class='row book-item'>
                        <div class='col-9 book-item-text'>
                            <h2>Book title</h2>
                            <p>author</p>
                        </div>
                        <button class='col-3 book-item-button'>
                            <h3>GO</h3>
                        </button>
                    </div>
                    <div class='row book-item'>
                        <div class='col-9 book-item-text'>
                            <h2>Book title</h2>
                            <p>author</p>
                        </div>
                        <button class='col-3 book-item-button'>
                            <h3>GO</h3>
                        </button>
                    </div>
                    <div class='row book-item'>
                        <div class='col-9 book-item-text'>
                            <h2>Book title</h2>
                            <p>author</p>
                        </div>
                        <button class='col-3 book-item-button'>
                            <h3>GO</h3>
                        </button>
                    </div>
                    <div class='row book-item'>
                        <div class='col-9 book-item-text'>
                            <h2>Book title</h2>
                            <p>author</p>
                        </div>
                        <button class='col-3 book-item-button'>
                            <h3>GO</h3>
                        </button>
                    </div>
                    <div class='row book-item'>
                        <div class='col-9 book-item-text'>
                            <h2>Book title</h2>
                            <p>author</p>
                        </div>
                        <button class='col-3 book-item-button'>
                            <h3>GO</h3>
                        </button>
                    </div>
                </div>
            </section>  
        </React.Fragment>
            
    )
}

export default MyBooks;