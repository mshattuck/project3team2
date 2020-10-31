import React, { useState, useEffect} from "react";
import { getBookofWeek } from "../../api/user";
import './style.css';
  

function AuthorofWeek() {
    console.log('authorofweek');
    const [bookofWeek, setBookofWeek] = useState({})

    useEffect(() => {
        getBookofWeek()
        .then(res => {
            console.log('a of w res: ', res);
            return setBookofWeek(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
            <React.Fragment>
                <div className='col d-flex justify-content-left title'>
                    <h2>Author of the week</h2>
                </div>
                <section className="AofW">
                    <div className='row d-flex justify-content-between align-items-center'> 
                        <div className='col'>
                            <div className='container-fluid author-info'>
                                <h1 className='author-name'>{bookofWeek.Author}</h1>
                                <p className='AofW-text'>Book: {bookofWeek.Title}</p>
                                <p className='AofW-text'>Award Year: {bookofWeek.Award_Year}</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='container-fluid author-image'>
                                <img className='img-fluid' src={bookofWeek.Image} alt='book cover' />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
                
           
    )
}

export default AuthorofWeek;