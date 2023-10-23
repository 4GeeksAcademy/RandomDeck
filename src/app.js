
let cardface = [ "A", "2", "3", "4", "5","6","7","8","9","10","11","J","K","Q"];
let mySuit = [ "♥", "♠", "♦", "♠"];
let face = cardface[Math.floor(Math.random() * cardface.length)]
let suit = mySuit[Math.floor(Math.random() * mySuit.length)]

window.onload = function() {
  let container = document.getElementsByClassName('container')
  let top_left = document.createElement('span')
  let bottom_right = document.createElement('span')
  let center = document.createElement('p')
  
  top_left.innerText =suit
  bottom_right.innerText =suit
  center.innerText = face

  container[0].appendChild(top_left)
  container[0].appendChild(bottom_right)
  container[0].appendChild(center)

 if (suit == "♥" || suit == "♦")  {
 container[0].style.color="red"
  }

};
 
