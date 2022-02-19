import React from 'react'

export default function Student(props) {

    // props ko smjne ke liye hum parameter smj skte hai
    // printing data on console
    // props me data obj ke form me hota hai

    console.log(props)
    console.log(props.name)

    return (

        <div style={
            { background: 'skyblue',
            padding:'10px' }
            }>

            <h2>--- Student component ---</h2>
            <h4>{props.name}</h4>
            <h4>{props.mail}</h4>
            <h4>{props.number}</h4>

        </div>

    )
}
