import React from 'react'

const Button = ({ className, type, children, disabled }) => {
    return (
        <button className={`${className || ""} btn`} type={type || "button"} disabled={disabled}>
            { children }
        </button>
    )
}

export default Button