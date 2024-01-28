import React from 'react'
import './modal.scss'

const Drawer = ({ children, close, show, className }) => {
    return (
        <>
            <div className={`overlay height--one position--fixed width--column-one ${show ? 'active' : ''}`} onClick={close}></div>
            <div className={`position--fixed modal--drawer bg--white ${show ? 'active' : ''} ${className || ""}`}>
                {children}
            </div>
        </>
    )
}

export default Drawer