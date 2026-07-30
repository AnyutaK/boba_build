import BubbleCup from "./BubbleCup";
function DrinkCard({ drink }) {

  function generateDrinkName(drink) {

    if (!drink.base) {
      return "Your Bubble Tea";
    }

    if (drink.base === "Matcha") {
      return "🍃 Matcha Dream";
    }

    if (drink.base === "Strawberry Tea") {
      return "🍓 Strawberry Bliss";
    }

    if (drink.base === "Taro") {
      return "💜 Taro Cloud";
    }

    if (drink.base === "Brown Sugar") {
      return "🤎 Brown Sugar Delight";
    }

    if (drink.base === "Milk Tea") {
      return "🧋 Classic Bubble Love";
    }

    return "✨ Custom Bubble Creation";
  }


  function getFlavorProfile(drink) {

    let profile = {
      sweet: "🍓",
      creamy: "🥛",
      refreshing: "🍃"
    };


    if (drink.base === "Strawberry Tea") {
      profile.sweet += "🍓🍓";
      profile.refreshing += "🍃🍃";
    }

    if (drink.base === "Matcha") {
      profile.refreshing += "🍃🍃";
      profile.creamy += "🥛";
    }

    if (drink.base === "Taro") {
      profile.creamy += "🥛🥛";
      profile.sweet += "🍓";
    }

    if (drink.topping === "Cheese Foam") {
      profile.creamy += "🥛🥛";
    }

    if (drink.topping === "Popping Boba") {
      profile.sweet += "🍓";
    }

    return profile;
  }


  const flavor = getFlavorProfile(drink);


  return (
    <div className="drink-card">

<h2>
  {generateDrinkName(drink)}
</h2>
      <BubbleCup drink={drink} />
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
      <h3>Flavor Profile ✨</h3>

        <p>
        Sweet: {flavor.sweet}
        </p>

        <p>
        Creamy: {flavor.creamy}
        </p>

        <p>
        Refreshing: {flavor.refreshing}
        </p>

    </div>
  );
}

export default DrinkCard;