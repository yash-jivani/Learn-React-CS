import React, { forwardRef } from 'react'

function ForwardRefDemo(props, inputRef) {
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default forwardRef(ForwardRefDemo)