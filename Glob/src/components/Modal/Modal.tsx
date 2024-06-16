import React, { FC, ReactNode } from 'react'
interface Props {
    children: ReactNode
    open: boolean
    setOpen: Function
}
const Modal: FC<Props> = ({ children, open, setOpen }) => {
    return (
        <div onClick={() => setOpen(false)} style={!open ? { display: 'none' } : {}} className='modal_mask' >
            <div onClick={(e) => e.stopPropagation()} className="modal_container">
                {children}
            </div>
        </div >
    )
}

export default Modal
