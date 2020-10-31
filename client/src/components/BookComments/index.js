import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function BookComments() {
    return (
        <div>
                <section className='comments'>
                    <div className='comment'>
                        <p className='comment-text'>Wow! This book blew me away! Has anyone read other works from this author?</p>
                    </div>
                    <div className='writer'>
                        <p className='writer-name'>Sandy Shells</p>
                    </div>
                    <div className='comment'>
                        <p className='comment-text'>I adored this book and I'm recommending it to my students.</p>
                    </div>
                    <div className='writer'>
                        <p className='writer-name'>Marty James</p>
                    </div>
                    <div className='comment'>
                        <p className='comment-text'>I'm only halfway through but I can't put this book down! I almost downloaded the audio book so I could finish it at work but I don't want to accidentally miss something!</p>
                    </div>
                    <div className='writer'>
                        <p className='writer-name'>Ben Powell</p>
                    </div>
                </section>
                <div className='comment-input-area'>
                    <input className='comment-input col-12' placeholder='Leave a Comment' />
                </div>
                <div className='buttons d-flex justify-content-between align-items-center'>
                    <button className='home-button'>
                    <Link to="/home" className="btn btn-link text-secondary">
                        <span className="text-secondary">Home</span>
                    </Link>
                    </button>
                    <button className='submit-comment'>
                        <h5>Submit</h5>
                    </button>
                </div>
        </div>
    )
}

export default BookComments;
