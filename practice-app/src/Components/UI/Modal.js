import React from 'react';
import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';
function Modal(props) {
    return (
        <>
            <div
                className={styles.backdrop}
                onClick={props.onCloseModal}
            ></div>
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
}

export default Modal;
