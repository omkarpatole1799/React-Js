import React, { useState } from 'react'
import * as geolib from 'geolib'
var geolocation = require('geolocation')

function Attendance() {
  const [text, setText] = useState('')
  const inButtonHandler = () => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) throw err
    //   console.log(position)
    })
    setText('You are not in office.')
    return
    navigator.geolocation.getCurrentPosition(
      (position, err) => {
        if (position) {
          let isInRegion = geolib.isPointInPolygon(
            // { latitude: 19.95441, longitude: 73.771092 },  // my home coordinates
            { latitude: 19.95441, longitude: 73.771092 },
            [
              { latitude: 19.97546, longitude: 73.77345 },
              { latitude: 19.94157, longitude: 73.74152 },
              { latitude: 19.91995, longitude: 73.79611 },
              { latitude: 19.96239, longitude: 73.82186 }
            ]
          )

          if (isInRegion) {
            setText('Attendance successfully done.')
          } else {
            setText('You are not in office.')
          }
        }

        if (err) {
          console.log(err)
        }
      }
    )
  }
  const outButtonHandler = () => {
    console.log('out button handler')
  }

  return (
    <>
      <h1>{text}</h1>
      <div>Attendance</div>

      <button onClick={inButtonHandler}> In </button>
      <button onClick={outButtonHandler}>Out</button>
    </>
  )
}

export default Attendance
