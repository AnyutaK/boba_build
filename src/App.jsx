import { useState } from "react";
import DrinkBuilder from "./components/DrinkBuilder";
import DrinkCard from "./components/DrinkCard";

function App() {

  const [drink, setDrink] = useState({
    base: "",
    sweetness: "",
    ice: "",
    topping: ""
  });


  return (
  <div className="app">

    <h1>🧋 Bubble Tea Builder</h1>
    <p>Create your perfect drink!</p>


    <div className="main-layout">

      <DrinkBuilder 
        drink={drink}
        setDrink={setDrink}
      />


      <div className="preview-panel">

        <DrinkCard drink={drink} />
      </div>

    </div>

  </div>
);}

export default App;