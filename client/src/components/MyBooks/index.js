import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { getBooks } from "../../api/user";
import {useStoreContext} from "../../util/GlobalState";


function MyBooks() {
    const [store] = useStoreContext();
    const [books, setBooks] = useState({})

    useEffect(() => {
        console.log('store: ', store);

        getBooks(store.user._id)
        .then(res => {
            console.log('res: ', res);
            return setBooks(res.data);
        })
        .catch(err => console.log(err));
    }, [store.user]);

    return (
        <React.Fragment>
            <div className="col d-flex justify-content-left title">
                <h2>My Reads</h2>
            </div>
            {(books && books.length > 0) ?
              <section className="my-books">
                  <div className="my-book-list">
                      {books.map(book => (
                          <div className="row book-item">
                              <div className="col-9 book-item-text">
                                  <h2>{book.Title}</h2>
                                  <p>{book.Author}</p>
                              </div>
                              <button className="col-3 book-item-button">
                                  <h3>GO</h3>
                              </button>
                          </div>
                        ))}
                  </div>
              </section>
              : <h1>No Books yet, get to reading</h1>
            }
        </React.Fragment>
    );
}

export default MyBooks;