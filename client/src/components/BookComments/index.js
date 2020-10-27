import React from 'react';
import './style.css';

function BookComments() {
    return (
        <div>
                <section class='comments'>
                    <div class='comment'>
                        <p class='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                    <div class='comment'>
                        <p class='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                    <div class='comment'>
                        <p class='comment-text'>This is a comment about the book. I really liked this book! it was a great book. read this book.</p>
                    </div>
                </section>
                <div class='comment-input-area'>
                    <input class='comment-input col-12' placeholder='Leave a Comment' />
                </div>
                <div class='buttons d-flex justify-content-between align-items-center'>
                    <button class='home-button'>
                        <h5>Home</h5>
                    </button>
                    <button class='submit-comment'>
                        <h5>Submit</h5>
                    </button>
                </div>
        </div>
    )
}

export default BookComments;
