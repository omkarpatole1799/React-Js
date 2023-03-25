import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Overlay = (props) => {
    return (
        <>
            <div
                className={styles.backdrop}
                onClick={props.onCloseModal}
            ></div>
        </>
    );
};

const ModalOverlay = (props) => {
    return (
        <>
            <Card className={`${styles.modal}`}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>

                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={styles.actions}>
                    <Button onClick={props.onCloseModal}>Close</Button>
                </footer>
            </Card>
        </>
    );
};

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Overlay onCloseModal={props.onCloseModal} />,
                document.getElementById('modal-overlay-root'),
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onCloseModal={props.onCloseModal}
                />,
                document.getElementById('modal-box-root'),
            )}
        </>
    );
}

export default Modal;
