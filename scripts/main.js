document.querySelector('a').onclick = function() {
    alert('Перейти по ссылке?');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shutterstock_379968754-800x577.jpg') {
      myImage.setAttribute ('src','images/three-vegetable-ramen-800x578 (1).jpg');
    } else {
      myImage.setAttribute ('src','images/shutterstock_379968754-800x577.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Good luck, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Good luck, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }