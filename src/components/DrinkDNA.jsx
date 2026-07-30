function DrinkDNA({ drink }) {
  function calculateDNA() {
    let dna = {
      sweetness: 20,
      creaminess: 20,
      fruitiness: 20,
      teaStrength: 20
    };
    if (drink.sweetness === "25%") {
      dna.sweetness = 25;
    }
    if (drink.sweetness === "50%") {
      dna.sweetness = 50;
    }
    if (drink.sweetness === "75%") {
      dna.sweetness = 75;
    }
    if (drink.sweetness === "100%") {
      dna.sweetness = 100;
    }

    if (drink.base === "Matcha") {
      dna.teaStrength = 80;
      dna.creaminess = 50;
    }
    if (drink.base === "Taro") {
      dna.creaminess = 90;
      dna.sweetness += 20;
    }
    if (drink.base === "Strawberry Tea") {
      dna.fruitiness = 90;
      dna.sweetness += 15;
    }
    if (drink.base === "Brown Sugar") {
      dna.creaminess = 70;
      dna.sweetness += 25;
    }
    if (drink.base === "Milk Tea") {
      dna.creaminess = 80;
    }

    if (drink.topping === "Popping Boba") {
      dna.fruitiness += 20;
    }
    if (drink.topping === "Cheese Foam") {
      dna.creaminess += 20;
    }
    if (drink.topping === "Tapioca Pearls") {
      dna.teaStrength += 10;
    }
    return dna;
  }
  const dna = calculateDNA();
  return (
    <div className="dna-card">
      <h3>
        Bubble Tea DNA
      </h3>
      <DNAbar 
        label="Sweetness"
        value={dna.sweetness}
      />
      <DNAbar 
        label="Creaminess"
        value={dna.creaminess}
      />
      <DNAbar 
        label="Fruitiness"
        value={dna.fruitiness}
      />
      <DNAbar 
        label="Tea Strength"
        value={dna.teaStrength}
      />
    </div>
  );
}
function DNAbar({label,value}) {
  return (
    <div className="dna-row">
      <p>
        {label}
      </p>
      <div className="dna-background">
        <div
          className="dna-fill"
          style={{
            width:`${value}%`
          }}
        />
      </div>
      <span>
        {value}%
      </span>
    </div>
  );
}
export default DrinkDNA;