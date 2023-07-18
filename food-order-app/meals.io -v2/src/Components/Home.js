import { NavLink } from "react-router-dom";
import React from "react";
import Footer from "./UI/Footer/Footer";

import homeBg from "../assets/images/bg.jpg";
import Button from "./UI/Button/Button";
function Home() {
  return (
    <>
      <div className="absolute text-white flex flex-col items-start justify-center top-[20rem] ps-10 text-2xl">
        <div className="font-bold pb-4">ENJOY YOUR HEALTHY DELICIOUS FOOD</div>
        <p className="text-xs w-[10rem] pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <NavLink to='/meals'>
          <Button >Order now!</Button>
        </NavLink>

      </div>
      <img
        className="w-full h-[100vh] object-cover object-center "
        src={homeBg}
        alt=""
      />
      <Footer />
    </>
  );
}
export default Home;
