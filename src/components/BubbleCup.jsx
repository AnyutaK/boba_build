  function BubbleCup({ drink }) {

  function getCupColor() {

    if (drink.base === "Matcha") return "#9ACD32";
    if (drink.base === "Taro") return "#dfa3df";
    if (drink.base === "Strawberry Tea") return "#ffabcf";
    if (drink.base === "Brown Sugar") return "#c27f38";
    if (drink.base === "Milk Tea") return "#d8b689";

    return "#d2fff4";
  }


  return (
    <div className="cup-container">

      <div className="straw"></div>

      <div
        className="cup"
        style={{
          backgroundColor: getCupColor()
        }}
      >

        {drink.topping && (
          <div className="pearls">
            🟤 🟤 🟤 🟤
          </div>
        )}

      </div>

    </div>
  );
}

export default BubbleCup;