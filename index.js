var buttonNum = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonNum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
  });
}

document.addEventListener("keydown", function (e) {
  var keyName = e.key;
  makeSound(keyName);
  buttonAnimation(keyName);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var sn = new Audio("sounds/snare.mp3");
      sn.play();
      break;
    default:
      console.log(buttonHtml);
      break;
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  
  //execute a piece of code after a certain amount of time has passed.
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
