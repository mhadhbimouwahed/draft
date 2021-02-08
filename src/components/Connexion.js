import React from 'react'

const Connexion = () => {
    return (
        <div className='container'>
            <input type="email" placeholder='email' id='email'/><br/>
            <input type="password" placeholder='password' id='password'/><br/>
            <button>login</button>
            <button>sign up</button>
        </div>
    )
}

export default Connexion
