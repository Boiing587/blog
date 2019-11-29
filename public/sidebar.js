document.write(`<link rel="stylesheet" href="${localStorage.getItem('mode')}.css" id='mode'>`);
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
  document.getElementById('trash').src='img/light.png';
}

function dark(){
  darkMode();
  document.getElementById('trash').src='img/styles.png';
}


document.write(`
  <div id='toolbar'>
    <a id='sideHeader'>Navigation</a>
    <a href='/'>Home</a>
    <a href='/about.html'>About me</a>
    <a href='/blog.html'>Blog</a>
    <a id='sideHeader'>External links</a>
    <a href='https://www.repl.it/@Boiing587'>My repl.it page</a>
    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Very good page</a>
    <a href='/authenticate' id='hidden'>New blog post</a>
    <div class='buttons'>
      <button class='button' onclick='light()'>🔅</button>
      <button class='button' onclick='dark()'>🌙</button>
    </div>
  </div>

`);


