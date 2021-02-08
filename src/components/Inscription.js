import React from 'react'

const Inscription = () => {
    return (
        <form>
            <input type="text" placeholder='nom'/><br/>
            <input type="text" placeholder='prenom'/><br/>
            <input type="email" placeholder='email'/><br/>
            <input type="password" placeholder='password'/><br/>
            <button>sign up</button>
        </form>
    )
}

export default Inscription
