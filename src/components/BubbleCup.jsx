  
  function BubbleCup({ drink }) {
   const fillKey = `${drink.base}-${drink.ice}-${drink.topping}`;
  function getCupColor() {

  if (drink.base === "Matcha") {
    return "linear-gradient(#b7e36b, #7cb342)";
  }

  if (drink.base === "Taro") {
    return "linear-gradient(#e7b8ff, #b46ee8)";
  }

  if (drink.base === "Strawberry Tea") {
    return "linear-gradient(#ffb6d9, #ff6fa5)";
  }

  if (drink.base === "Brown Sugar") {
    return "linear-gradient(#d79b55, #8b4513)";
  }

  if (drink.base === "Milk Tea") {
    return "linear-gradient(#ead3a8, #b98b5d)";
  }

  if (drink.base === "Green Tea") {
    return "linear-gradient(#b8e986, #4caf50)";
  }

  return "linear-gradient(#cffff1, #8ee3cf)";
}
function renderIce() {

  if (drink.ice === "No Ice" || !drink.ice) {
    return null;
  }


  let cubes = 2;

  if (drink.ice === "Normal Ice") {
    cubes = 4;
  }

  if (drink.ice === "Extra Ice") {
    cubes = 6;
  }


  return (
    <div className="ice-cubes">

      {[...Array(cubes)].map((_, index) => (
        <span 
          key={index}
          className={`ice ice${index + 1}`}
        ></span>
      ))}

    </div>
  );
}
  function renderToppings() {

  if (!drink.topping) {
    return null;
  }
  if (drink.topping === "Tapioca Pearls") {
    return (
      <div className="pearls">

  <div className="pearl pearl1"></div>
  <div className="pearl pearl2"></div>
  <div className="pearl pearl3"></div>
  <div className="pearl pearl4"></div>
  <div className="pearl pearl5"></div>

</div>
    );
  }
  if (drink.topping === "Popping Boba") {
    return (
      <div className="popping-boba">

  <span className="boba boba1"></span>
  <span className="boba boba2"></span>
  <span className="boba boba3"></span>
  <span className="boba boba4"></span>
  <span className="boba boba5"></span>

</div>
    );
  }
  if (drink.topping === "Jelly") {
    return (
      <div className="jelly">

        <span></span>
        <span></span>
        <span></span>

      </div>
    );
  }
  if (drink.topping === "Grass Jelly") {
    return (
      <div className="grass-jelly">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
    );
  }
  if (drink.topping === "Cheese Foam") {
    return (
      <div className="cheese-foam">
        ☁️☁️☁️☁️☁️☁️☁️
      </div>
    );
  }
  if (drink.topping === "Red Bean") {
    return (
      <div className="red-bean">

        <span>🫘</span>
        <span>🫘</span>
        <span>🫘</span>
        <span>🫘</span>
        <span>🫘</span>

      </div>
    );
  }
  return null;
}

  return (
  <div className="cup-container">

    <div className="straw"></div>

    <div className="lid"></div>

    <div className="cup">

  <div className="glass-shine"></div>

     <div
     key={fillKey}
  className="liquid"
  style={{
  background: getCupColor()
  }}
>

  <div className="liquid-wave">
  <div className="wave wave1"></div>
  <div className="wave wave2"></div>
</div>
 {renderIce()}

  {renderToppings()}

</div>

    </div>

  </div>
);
}
export default BubbleCup;