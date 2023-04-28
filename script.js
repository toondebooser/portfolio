// Initialising the canvas
var canvas = document.querySelector("canvas");
const blackElement = document.querySelector(".backgroundBlack");
ctx = canvas.getContext("2d");

// Setting the width and height of the canvas
canvas.width = 20;
canvas.height = window.innerHeight;

// Setting up the letters
var letters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
letters = letters.split("");

// Setting up the columns
var fontSize = 10,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = "rgba(51, 51, 51, .5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = "#FFC000";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);

const personalInfo = document.querySelector(".personalDescription");
const arrowIcon = document.querySelector(".arrow");
const backgroundBlack = document.querySelector(".backgroundBlack");
const map = document.querySelector(".map");
const contactTitle = document.querySelector(".contactTitle");
const contact = document.querySelector(".city");
const main = document.querySelector("main");
const phone= document.querySelector(".phone");
const cake= document.querySelector(".cake");
const envelope= document.querySelector(".envelope");
const number= document.querySelector('.number')
const birthday = document.querySelector('.birthday')
const email = document.querySelector('.email')
const removeDelay = () => {
  if (backgroundBlack.classList.contains('active')) {
    return;
  }
  else{
  main.classList.remove("active");
}
};
const activate = () => {
  if (personalInfo.classList.contains("active")) {
    personalInfo.classList.remove("active");
    arrowIcon.classList.remove("active");
    backgroundBlack.classList.remove("active");
    map.classList.remove("active");
    contactTitle.classList.remove("active");
    contact.classList.remove("active");
    phone.classList.remove('active')
    cake.classList.remove('active')
    main.classList.remove('blur')
    envelope.classList.remove('active')
    number.classList.remove('active')
    birthday.classList.remove('active')
    email.classList.remove('active')
    setTimeout(removeDelay, 1000)
  } else {
    personalInfo.classList.add("active");
    arrowIcon.classList.add("active");
    backgroundBlack.classList.add("active");
    map.classList.add("active");
    contactTitle.classList.add("active");
    contact.classList.add("active");
    main.classList.add("active");
    phone.classList.add('active')
    cake.classList.add('active')
    envelope.classList.add('active')
    number.classList.add('active')
    birthday.classList.add('active')
    email.classList.add('active')
    main.classList.add('blur')
  }
};
