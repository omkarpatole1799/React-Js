import React from 'react';
import Card from '../UI/Card/Card';
import styles from './Home.module.css';
function Home() {
    return (
        <>
            <Card className={styles.home__container}>
                <h2>Welcome Back !!</h2>
            </Card>
        </>
    );
}

export default Home;
