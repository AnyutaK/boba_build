function Mascot({drink}) {


function getMessage(){

if(!drink.base){
return "🐱 Pick a tea and I’ll help you create it!";
}


if(drink.base==="Matcha"){
return "🐱 A classy choice! Matcha lovers are elegant 🍃";
}


if(drink.base==="Strawberry Tea"){
return "🐱 So sweet! This one looks adorable 🍓";
}


if(drink.topping==="Tapioca Pearls"){
return "🐱 Extra chewy pearls? Excellent decision! 🧋";
}


if(drink.topping==="Cheese Foam"){
return "🐱 Fancy foam upgrade detected ☁️";
}


return "🐱 Your bubble tea is looking amazing!";
}



return(
<div className="mascot-card">

<div className="mascot">
🐱
</div>

<p>
{getMessage()}
</p>

</div>
)

}

export default Mascot;