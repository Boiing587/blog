document.write(`<link rel="stylesheet" href="${localStorage.getItem('mode')}.css" id='mode'`);
var mode = document.getElementById('mode');


function lightMode(){
  var mode = document.getElementById('mode');
  mode.setAttribute('href', 'light.css');
  localStorage.setItem('mode', 'light');
}

function darkMode(){
  var mode = document.getElementById('mode');
  mode.setAttribute('href', 'styles.css');
  localStorage.setItem('mode', 'styles');
}


function light(){
  lightMode();
}

function dark(){
  darkMode();
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