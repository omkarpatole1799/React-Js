import React from 'react';
import styles from './Card.module.css';

function Card(props) {
    return <div className={`${styles.card__container} ${props.className}`}>{props.children}</div>;
}

export default Card;
