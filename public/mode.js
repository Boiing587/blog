document.write(`<link rel="stylesheet" href="${localStorage.getItem('mode')}.css" id='mode'`);
var mode = document.getElementById('mode');
localStorage.setItem('mode', 'styles');

function lightMode(){
  mode.setAttribute('href', 'light.css');
}

function lightStored(){
  localStorage.setItem('mode', 'light');
}

function darkMode(){
  mode.setAttribute('href', 'styles.css');
}

function darkStored(){
  localStorage.setItem('mode', 'styles');
}

function light(){
  lightMode();
  lightStored();
}

function dark(){
  darkMode();
  darkStored();
}
/*
function getMode(){
  var x = localStorage.getItem('mode')
  if (x == "light") {
    mode.setAttribute('href', 'light')
  } else if (x == "dark") {
    mode.setAttribute('href', 'styles')
  }
}
*/