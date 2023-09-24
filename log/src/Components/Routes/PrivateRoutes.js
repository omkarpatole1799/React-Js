import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function checkTockenExpired() {
    let storedTockenExpiryDate = localStorage.getItem('tockenExpiry');
    let tockenRemainTime = new Date(storedTockenExpiryDate);
    const now = new Date();
    const timeRemaining = tockenRemainTime.getTime() - now.getTime();
    console.log(timeRemaining);
    return timeRemaining < 0 ? false : true;
}

function PrivateRoutes() {
    let tocken = localStorage.getItem('tocken');

    let auth;
    if (tocken) {
        if (checkTockenExpired()) {
            auth = { tocken: true };
        } else {
            localStorage.clear();
            auth = { tocken: false };
        }
    } else {
        localStorage.clear();
        auth = { tocken: false };
    }

    return <>{auth.tocken ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default PrivateRoutes;
