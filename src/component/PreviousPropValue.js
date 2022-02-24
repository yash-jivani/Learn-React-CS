import React, { useRef, useEffect } from 'react'

export default function PreviousPropValue(props) {

    // * explanation : csbys | 59 | 7.00 

    // useEffect ki help se useRef direct dom se current value ko lega (update hone ne pehle)
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
