import React from "react";
import { useStoreContext } from '../../util/GlobalState';

import './style.css';

function Welcome() 
{

    const [store] = useStoreContext();

    console.log("store.user: ",store.user);
 
    return(
        <div className='col-12'>
            <section className='welcome'>
                <h1>Hello {store.user.username}</h1>
              
                <p className='AofW-text'>Meet and connect with your follow readers</p>
            </section>
        </div>
    )
}

export default Welcome;