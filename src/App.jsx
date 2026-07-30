import { useState } from "react";
import DrinkBuilder from "./components/DrinkBuilder";
import DrinkCard from "./components/DrinkCard";
import ShareCard from "./components/ShareCard";

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

  <div className="left-side">

    <DrinkBuilder 
      drink={drink}
      setDrink={setDrink}
    />

    <ShareCard drink={drink}/>

  </div>


  <div className="preview-panel">

    <DrinkCard drink={drink}/>

  </div>

  </div>
  </div>
  );
 }

export default App;