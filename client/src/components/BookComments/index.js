import React from 'react';
import './style.css';

function BookComments() {
    return (
        <div>
                <section className='comments'>
                    <div className='comment'>
                        <p className='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                    <div className='comment'>
                        <p className='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                    <div className='comment'>
                        <p className='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                </section>
                <div className='comment-input-area'>
                    <input className='comment-input col-12' placeholder='Leave a Comment' />
                </div>
                <div className='buttons d-flex justify-content-between align-items-center'>
                    <button className='home-button'>
                        <h5>Home</h5>
                    </button>
                    <button className='submit-comment'>
                        <h5>Submit</h5>
                    </button>
                </div>
        </div>
    )
}

export default BookComments;
