import { Link } from 'react-router-dom'

import React from 'react'

export default function Nav() {
    return (
        <div>
            <Link to='/home'>Home page</Link> | |
            <Link to='/about'> About page</Link>
        </div>
    )
}
