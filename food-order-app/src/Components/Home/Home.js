import React from "react"
import mealsBg from "../../assets/images/meals-bg.jpg"
import "./Home.css"
import Card from "../UI/Card/Card"
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-image">
          <img src={mealsBg} />
        </div>

        <Card className="home-card">
          <h4>Best In Class Food</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolorum id nemo dolore ea numquam non nisi veritatis, ipsum
            laboriosam.
          </p>
        </Card>
      </div>
    </>
  )
}

export default Home
