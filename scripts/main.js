var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/old-classic-porsche-911.jpg') {
      myImage.setAttribute ('src','images/Retro-Styled-2011-Singer-Porsche-911.jpeg');
    } else {
      myImage.setAttribute ('src','images/old-classic-porsche-911.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName + ', Vermont is very cool:-)';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ', Vermont is very cool:-)';
}

myButton.onclick = function() {
  setUserName();
}