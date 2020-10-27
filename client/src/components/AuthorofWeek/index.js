import React from 'react';
import './style.css';

function AuthorofWeek() {
    return (
            <React.Fragment>
                <div class='col d-flex justify-content-left title'>
                    <h2>Author of the week</h2>
                </div>
                <section class="AofW">
                    <div class='row d-flex justify-content-between align-items-center'> 
                        <div class='col'>
                            <div class='container-fluid author-info'>
                                <h1 class='author-name'>Anthony Doerr</h1>
                                <p class='AofW-text'>Winning book</p>
                                <p class='AofW-text'>Publication year</p>
                                <p class='AofW-text'>Award Year</p>
                            </div>
                        </div>
                        <div class='col-4'>
                            <div class='container-fluid author-image'>
                                <img class='img-fluid' src='book-covers/all-the-light-we-cannot-see.png' alt='book cover' />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
                
           
    )
}

export default AuthorofWeek;