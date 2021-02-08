import React from 'react'
import {useHistory } from 'react-router-dom';

const Connexion = () => {
    const history = useHistory();
    return (
        <div className='container'>
            <input type="email" placeholder='email' id='email'/><br/>
            <input type="password" placeholder='password' id='password'/><br/>
            <button>login</button>
            <button onClick={() => history.push('/inscription') }>sign up</button>
        </div>
    )
}

export default Connexion
