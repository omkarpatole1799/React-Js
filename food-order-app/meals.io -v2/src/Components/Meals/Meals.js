import { useEffect, useState, useCallback } from "react";
import MealsList from "./MealsList";
import Footer from "../UI/Footer/Footer";
function Meals() {
  const [mealsData, setMealsData] = useState([]);
  const transformData = (data) => {
    let mealData = [];
    for (const key in data) {
      mealData.push({
        id: key,
        mealName: data[key].mealName,
        description: data[key].description,
        image: data[key].image,
        price: data[key].price,
        quantity: data[key].quantity,
      });
    }
    setMealsData(mealData);
  };

  const fetchData = async () => {
    const res = await fetch(
      "https://meals-io-1799-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = await res.json();
    transformData(data);
  };

  useEffect(() => {
    console.log("1 time only");
    fetchData();
  }, []);
  
  const classNames = `bg-[#EBEAEF] ms-0.5 me-0.5 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5`;

  return (
    <>
      <div className={classNames}>
        <MealsList meals={mealsData} />
      </div>
      <Footer />
    </>
  );
}

export default Meals;
