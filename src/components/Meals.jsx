import {} from "react";
import { useState, useEffect } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      console.log(meals);
      setLoadedMeals(meals);
    }

    fetchMeals();
    console.log(loadedMeals);
  }, []);

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
