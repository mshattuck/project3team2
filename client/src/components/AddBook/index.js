import React from 'react';
import './style.css';

function AddBook() {
    return(
        <div class="col-12">
            <div class='col title'>
                <h2>Add a Book</h2>
            </div>
            <section class='book-list d-flex flex-wrap justify-content-around align-items-center'>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>All the Light We Cannot See</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>The Nickel Boys</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>The Overstory</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>Less</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>The Sympathizer</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>The Goldfinch</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
                <button class='add-book'>
                    <h4 class='new-book-title d-inline'>Tinker</h4>
                    <h2 class='new-book-plus d-inline'>+</h2>
                </button>
            </section>
        </div>
    )
}

export default AddBook;