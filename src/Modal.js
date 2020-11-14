import React from 'react'
import "./Modal.css";

function Modal({open, children, onClose}) {
    if (!open) return null
    return (
        <>
            <div className = "overlaystyle" />
            <div className="modalstyle">
                <button onClick ={onClose} className="closepopup">X</button>
                {children}
            </div>
        </>
    )
}

export default Modal
