import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/fetchapi'>Fetch API</Link>
        </div>
    )
}

export default Navigation
