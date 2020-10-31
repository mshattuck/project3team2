import React from 'react';
import './style.css';

function BookMatches() {
    return (
        <div className='row matches'>
            <div className="col-12">
                <div className='col title'>
                    <h2>Matches</h2>
                </div>
                <section className='matches'>
                    <button className='match-item'>
                        <h5 className='match-name'>Sandy Shells</h5>
                        <h1>x3</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Martin James</h5>
                        <h1>x2</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Kevin Richards</h5>
                        <h1>x2</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Ben Powell</h5>
                        <h1>x2</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Allie Frank</h5>
                        <h1>x1</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Regina lowell</h5>
                        <h1>x1</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Tony D'Errico</h5>
                        <h1>x1</h1>
                    </button>
                    <button className='match-item'>
                        <h5 className='match-name'>Colin Short</h5>
                        <h1>x1</h1>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default BookMatches;
