import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getBooks } from "../../api/user";
import {useStoreContext} from "../../util/GlobalState";
import { motion } from "framer-motion";
import "./style.css";


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
                          <motion.div className="row book-item" whileHover={{ scale:1.1 }} whileTap={{ scale: 0.9 }}>
                              <Link to="/books">
                                <div className="col-9 book-item-text">
                                    <h2>{book.Title}</h2>
                                    <p>{book.Author}</p>
                                </div>
                                <button className="col-3 book-item-button">
                                    <h3>GO</h3>
                                </button>
                              </Link>
                          </motion.div>
                        ))}
                  </div>
              </section>
              : <section className="my-books">
                    <div className="no-book-message">
                        <h1>No Books yet, get to reading</h1>
                    </div>
                </section>
            }
        </React.Fragment>
    );
}

export default MyBooks;