import { useState } from "react";
import DrinkCard from "./DrinkCard";

import {
  teaBases,
  sweetnessLevels,
  iceLevels,
  toppings
} from "../data/options";

function DrinkBuilder() {

  const [drink, setDrink] = useState({
    base: "",
    sweetness: "",
    ice: "",
    topping: ""
  });


 return (
  <div className="builder-container">
    <div className="options-panel">
      <h2>Choose your Tea Base 🍵</h2>

      {teaBases.map((tea) => (
        <button
          key={tea}
          onClick={() =>
            setDrink({
              ...drink,
              base: tea
            })
          }
        >
          {tea}
        </button>
      ))}


      <h2>Sweetness 🍯</h2>

      {sweetnessLevels.map((level) => (
        <button
          key={level}
          onClick={() =>
            setDrink({
              ...drink,
              sweetness: level
            })
          }
        >
          {level}
        </button>
      ))}


      <h2>Ice ❄️</h2>

      {iceLevels.map((ice) => (
        <button
          key={ice}
          onClick={() =>
            setDrink({
              ...drink,
              ice: ice
            })
          }
        >
          {ice}
        </button>
      ))}


      <h2>Topping 🧋</h2>

      {toppings.map((item) => (
        <button
          key={item}
          onClick={() =>
            setDrink({
              ...drink,
              topping: item
            })
          }
        >
          {item}
        </button>
      ))}
      </div>
    <DrinkCard drink={drink} />
    </div>
  );
}
export default DrinkBuilder;