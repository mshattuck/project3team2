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
        <React.Fragment>
            <div className="col-12">
                <div className='col title'>                
                    <h2>Add a Book</h2>
                </div>
                {(books && books.length > 0) ?
                <section className='book-list d-flex flex-wrap justify-content-around align-items-center'>
                    {books.map(book => (
                        <button className='add-book'>
                            <h4 className='new-book-title d-inline'>{book.Title}</h4>
                            <h2 className='new-book-plus d-inline'>+</h2>
                        </button>
                ))}
                </section>
                 :  <button className='add-book'>
                        <h4 className='new-book-title d-inline'>Books to come...</h4>
                        <h2 className='new-book-plus d-inline'>+</h2>
                    </button>
                }
            </div>
    
        </React.Fragment>
    )
}

export default AddBook;