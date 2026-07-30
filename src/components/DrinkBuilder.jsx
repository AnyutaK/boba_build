import {
  teaBases,
  sweetnessLevels,
  iceLevels,
  toppings
} from "../data/options";
function DrinkBuilder({ drink, setDrink }) {
  return (
    <div className="builder-container">
      <div className="options-panel">
        <div className= "option-section">
        <h2>Choose your Tea Base 🍵</h2>
        {teaBases.map((tea) => (
          <button
            key={tea}
            className={drink.base === tea ? "selected" : ""}
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
        </div>
        <div className= "option-section">
        <h2>Sweetness 🍯</h2>
        {sweetnessLevels.map((level) => (
          <button
            key={level}
            className={drink.sweetness === level ? "selected" : ""}
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
        </div>
        <div className= "option-section">
        <h2>Ice ❄️</h2>
        {iceLevels.map((ice) => (
          <button
            key={ice}
            className={drink.ice === ice ? "selected" : ""}
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
        </div>
        <div className= "option-section">
        <h2>Topping 🧋</h2>
        {toppings.map((item) => (
          <button
            key={item}
            className={drink.topping === item ? "selected" : ""}
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
      </div>
    </div>
  );
}
export default DrinkBuilder;