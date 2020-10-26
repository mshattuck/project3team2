import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userAPI from "../../server/routes/user";

/* const stuff = require("../../") */

import './style.css';

function Welcome(props) 
{
    const [User, setUser] = useState({})

    const {id} = useParams()
    useEffect(() => {
      userAPI.getUser(id)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
}, [])


    return(
        <div class='col-12'>
            <section class='welcome'>
                <h1>Hello <p>{user.username}</p></h1>
                <p class='AofW-text'>Meet and connect with your follow readers</p>
            </section>
        </div>
    )
}

export default Welcome;