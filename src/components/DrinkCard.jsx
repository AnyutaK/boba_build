 function DrinkCard({ drink }) {

  return (
    <div className="drink-card">

      <h2>🧋 Your Bubble Tea</h2>

      <h3>
        {drink.base || "Choose your tea"}
      </h3>

      <p>
        <strong>Base:</strong> {drink.base || "Not selected"}
      </p>

      <p>
        <strong>Sweetness:</strong> {drink.sweetness || "Not selected"}
      </p>

      <p>
        <strong>Ice:</strong> {drink.ice || "Not selected"}
      </p>

      <p>
        <strong>Topping:</strong> {drink.topping || "Not selected"}
      </p>

    </div>
  );
}

export default DrinkCard;