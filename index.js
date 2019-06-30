//creating random number for first die
var x1= Math.random()*10;
x1= Math.floor(x1);
firstDie=jumbleFirst(x1);

//creating random number for 2nd die
var x2= Math.random()*10;
x2= Math.floor(x2);
secondDie=jumbleSecond(x2);



function jumbleFirst(x1){
    if(x1>6){
    x1=x1-3;
    return x1;
}else if(x1==0){
    x1=x1+1;
    return x1;
}else{
    return x1;
}
}



function jumbleSecond(x2){
    if(x2>6){
    x2=x2-3;
    return x2;
}else if(x2===0){
    x2=x2+1;
    return x2;
}else{
    return x2;
}
}

for(var i=1;i<=6;i++)
{
    if(firstDie == i)
    {
        document.querySelector(".img1").setAttribute("src","images/dice"+i+".png");
    }

    if(secondDie == i){
        document.querySelector(".img2").setAttribute("src","images/dice"+i+".png");
    }
}

if(firstDie > secondDie){
    document.querySelector("h1").textContent="Player 1 wins";
}else if(firstDie == secondDie)
{
        document.querySelector("h1").textContent="Game draw";

}else{
        document.querySelector("h1").textContent="Player 2 wins";

}
