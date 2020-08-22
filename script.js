function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let y = getRandomInt(3);

if (y == 0) {
   game = 'Rock';
}
else if (y == 1) {
     game = 'Paper';
}

else if (y == 2) {
    game = 'Scissors';
}
else {
    console.log('no');
}

let h2 =document.createElement('h2');
let sd =document.createTextNode(game);


document.getElementsByClassName("results")[0].appendChild(sd);

console.log(sd);

function removeElement(mychoice){
// var imgpaper  = document.getElementById("paper").remove();
// var imgrock  = document.getElementById("rock").remove();
// var imgscissors  = document.getElementById("scissors").remove();
}


// removeElement()

function insert_selection(){
    console.log(sd);
if (game =="Scissors"){
  let img1 = document.createElement('img');
  img1.setAttribute('src','/image/Scissors.png')
document.getElementsByClassName('play')[0].appendChild(img1);
} 

else if (game =="Rock"){
    let img1 = document.createElement('img');
    img1.setAttribute('src','/image/Rock.jpeg')
  document.getElementsByClassName('play')[0].appendChild(img1);
  } 

  else if (game =="Paper"){
    let img1 = document.createElement('img');
    img1.setAttribute('src','/image/Paper.png')
  document.getElementsByClassName('play')[0].appendChild(img1);
  } 
}

insert_selection();