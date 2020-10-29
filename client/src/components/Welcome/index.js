import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/user";

import './style.css';

function Welcome() {
    const [user, setUser] = useState({})

    const { id } = useParams();
    useEffect(() => {
      getUser(id)
        .then(res => {
            console.log('res: ', res);
            return setUser(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div class='col-12'>
            <section class='welcome'>
                <h1>Hello <p>{user.username}</p></h1>
                <h1>Hello</h1>
                <p class='AofW-text'>Meet and connect with your follow readers</p>
            </section>
        </div>
    )
}

export default Welcome;