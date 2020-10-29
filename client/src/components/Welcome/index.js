import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/user";
import { useStoreContext } from '../../util/GlobalState';

import './style.css';

function Welcome() 
{

    const [store] = useStoreContext();

    console.log("store.user: ",store.user);
 
    return(
        <div class='col-12'>
            <section class='welcome'>
                <h1>Hello {store.user.username}</h1>
              
                <p class='AofW-text'>Meet and connect with your follow readers</p>
            </section>
        </div>
    )
}

export default Welcome;