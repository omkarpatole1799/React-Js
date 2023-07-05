import React from 'react'
import DOM from 'react-dom'
import classes from './Modal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'

const OverlayRoot = (props) => {
    return <div className={`${classes.modal_overlay}`}></div>
}
const ModalRoot = (props) => {
    return (
        <Card className={`${classes.modal}`}>
            <div className={`${classes.modal_heading}`}>
                <h4>{props.heading}</h4>
            </div>
            <div className={`${classes.modal_message}`}>
                <p>{props.description}</p>
            </div>
            <Button
                onClick={props.onClick}
                className={`${classes.modal_button}`}>
                Close
            </Button>
        </Card>
    )
}
function Modal(props) {
    return (
        <>
            {DOM.createPortal(
                <OverlayRoot />,
                document.getElementById('overlay_root'),
            )}
            {DOM.createPortal(
                <ModalRoot
                    heading={props.heading}
                    description={props.description}
                    onClick={props.onClick}
                />,
                document.getElementById('modal_root'),
            )}
        </>
    )
}

export default Modal
