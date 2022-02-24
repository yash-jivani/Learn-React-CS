import React, { useRef, useEffect } from 'react'

export default function PreviousPropValue(props) {

    // * explanation : csbys | 59 | 7.00 

    // useRef value ko direct dom se lega
    const lastPropVal = useRef();
    console.log("'lastPropVal' (useRef) : ", lastPropVal)
    useEffect(() => {
        console.log("'props.count' in useEffect : ", props.count)
        lastPropVal.current = props.count
    })
    const previousPropVal = lastPropVal.current

    return (
        <div className='container'>
            <h1>PreviousPropValue</h1>
            <h2>________________</h2>
            <h2>Current Value : {props.count}</h2>
            <h2>Previous Value : {previousPropVal}</h2>
        </div>
    )
}
