// import React, { useState } from 'react'
import React from 'react'

export default function Conditions() {

    // const [user, setUser] = useState(1)
    // const [user2, setUser2] = useState(2)
    // const [user3, setUser3] = useState(3)

    const user = 1;
    const user2 = 2;
    const user3 = 3;


    return (
        <div className='container'>
            <h1>if else</h1>
            {
                user === 1 ? <h3>user 1</h3> : 'other(any)'
            }
            <h1>if elseif else</h1>
            {
                user2 === 2 ? <h3>user 2</h3> :    // if
                    user3 === 3 ? <h3>user 3</h3> :   // else if
                        <h3>Not allow</h3>          // else
            }
        </div>
    )
}
