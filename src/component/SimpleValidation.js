import React, { useState } from 'react'

export default function SimpleValidation() {


    const [user, setUser] = useState("")
    const [passwd, setPasswd] = useState("")
    // show -> username validation
    const [show, setShow] = useState(false)
    // passErr -> password validation
    const [passErr, setPassErr] = useState(false)

    const userInput = (e) => {
        console.log(e.target.value)
        setUser(e.target.value)
        // ager username ki length 4 se kam hai to ...
        // set show for validation
        if (e.target.value.length < 4) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    const getData = (e) => {
        e.preventDefault()

        if (user.length < 3 || passwd.length < 3) {
            alert('enter valid user name and password')
        }
        else {
            alert('all good :)')
        }

    }

    const userPasswd = (e) => {
        console.log(e.target.value)
        setPasswd(e.target.value)
        let len = e.target.value
        // ager password ki length 9 se kam ho to...
        // set passwd for validation
        if (len.length < 9) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
    }

    return (
        <div className='container'>
            <h1>Simple form validation</h1>
            <form onSubmit={getData}>
                <input type="text" placeholder='Enter userName' onChange={userInput} />
                {/* span tabhi print hoga jab show ki value true hogi */}
                {show ? <span>invalid</span> : ""}<br /><br />
                <input type="password" onChange={userPasswd} placeholder='Password' />
                {/* span tbhi print hoga hab passErr ki value true hogi */}
                {passErr ? <span> invalid password</span> : ""}<br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
