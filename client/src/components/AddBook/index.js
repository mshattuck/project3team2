import React, { useState, useEffect } from 'react';
import './style.css';
import { getAllBooks } from "../../api/user";
import {useStoreContext} from "../../util/GlobalState";

function AddBook() {
 
        console.log("running AddBook()");

        const [books, setBooks] = useState([]);
      //  const [formObject, setFormObject] = useState({});
      
        // Load all books and store them with setBooks
        useEffect(() => {
          loadBooks()
        }, [])
      
        // Loads all books and sets them to books
        function loadBooks() {
            console.log("running loadBooks()");
          getAllBooks()
            .then((res) => {
                console.log("setBooks(res.data): ",res.data);
                setBooks(res.data);
            })
            .catch(err => console.log(err));
        };
      
    
    return(
        <div className="col-12">
            <div className='col title'>
                <h2>Add a Book</h2>
            </div>
            <section className='book-list d-flex flex-wrap justify-content-around align-items-center'>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>All the Light We Cannot See</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>The Nickel Boys</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>The Overstory</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>Less</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>The Sympathizer</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>The Goldfinch</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
                <button className='add-book'>
                    <h4 className='new-book-title d-inline'>Tinker</h4>
                    <h2 className='new-book-plus d-inline'>+</h2>
                </button>
            </section>
        </div>
    )
}

export default AddBook;