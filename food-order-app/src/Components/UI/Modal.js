import React from "react"
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"
function Overlay(props) {
  return <div onClick={props.onClick} className={classes.backdrop} />
}

function ModalOverlay(props) {
  return <div className={`${classes.modal}`}>{props.children}</div>
}
const portalElement = document.getElementById("modal-overlay")

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onClick={props.onClick}></Overlay>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
export default Modal
