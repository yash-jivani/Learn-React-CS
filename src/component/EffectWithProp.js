import React, { useEffect } from 'react'

export default function EffectWithProp(props) {

    // ? jab one ki state chng hogi sirf tab call hoga
    useEffect(() => {
        console.log('ONE')
    }, [props.one])  // with condition

    // ? jab two ki state chng hogi sirf tab call hoga
    useEffect(() => {
        console.log('TWO')
    }, [props.two])  // with conditions
    return (
        <div className='container'>
            <h1>useEffect with conditions + props</h1>
            <h3>{props.one}</h3>
            <h3>{props.two}</h3>
        </div>
    )
}
