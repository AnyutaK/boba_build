import BubbleCup from "./BubbleCup";
import { useRef } from "react";
import { toPng } from "html-to-image";
function ShareCard({ drink }) {
  const cardRef = useRef(null);
  function downloadCard() {
    if (!cardRef.current) return;
   toPng(cardRef.current, {
  cacheBust: true
})
.then((dataUrl) => {
  const link = document.createElement("a");
  link.download = "bubble-tea.png";
  link.href = dataUrl;
  link.click();
});
}
  function generateName() {
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
    return " My Bubble Creation";
  }
  return (
<>
    <div className="share-card"
        ref={cardRef}
>
        <h2>
        Spread the bubbles, share the tea
      </h2>
     <div className="mini-cup-wrapper">
        <div className="mini-cup">
            <BubbleCup drink={drink}/>
        </div>
        </div>
      <h3>
        {generateName()}
      </h3>
      <p>
        Base:
        <b>{drink.base || "Mystery Tea"}</b>
      </p>
      <p>
    Sweetness: {drink.sweetness}
      </p>
      <p>
        Topping:
        <b>{drink.topping || "None"}</b>
      </p>
      <small>
        #BubbleTeaBuilder
      </small>
    </div>
        <button onClick={downloadCard}>
    📸 Download Share Card
    </button>
</>
  );
}
export default ShareCard;