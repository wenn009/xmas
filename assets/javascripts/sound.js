// var sound = new Audio("christmas.mp3");

var sound = new Audio("sounds/happybirthday.mp3");
var play = function(){
    sound.play();
    sound.loop = true;
}
document.addEventListener('DOMContentLoaded', play);