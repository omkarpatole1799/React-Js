import React from 'react'

function Attendance() {
    const inButtonHandler = () => {
        console.log('adding in time')
        console.log('getting geo location')
        navigator.geolocation.getCurrentPosition((position, err) => {
            if (position) {
                let lat = position.coords.latitude
                let lng = position.coords.longitude
                console.log(lat)
                console.log(lng)
            }
            if (err) {
                console.log(err)
            }
        })
    }
    const outButtonHandler = () => {
        console.log('out button handler')
    }

    let polygon = [
        { lat: 19.9542, lng: 73.7707 },
        { lat: 19.95415, lng: 73.7707 },
        { lat: 19.95417, lng: 73.7707 },
    ]

    return (
        <>
            <div>Attendance</div>
            <button onClick={inButtonHandler}> In </button>
            <button onClick={outButtonHandler}>Out</button>
        </>
    )
}

export default Attendance
