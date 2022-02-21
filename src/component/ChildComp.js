import React from 'react'

export default function ChildComp(props) {
    const users = [
        { name: 'yashObj', number: 999 },
        { name: 'xyzObj', number: 888 },
        { name: 'anishObj', number: 777 },
    ]
    const name = 'yash-name';
    return (
        <>

        <h3>Child Compoenet</h3>
        <button onClick={()=>{props.funcX(users[0])}}>click</button>
        <button onClick={()=>{props.funcY(name)}}>click</button>

        </>
    )
}
