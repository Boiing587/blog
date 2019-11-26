document.write(`

  <div id='toolbar'>
    <a id='sideHeader'>Navigation</a>
    <a href='/'>Home</a>
    <a href='/about.html'>About me</a>
    <a href='/blog.html'>Blog</a>
    <a id='sideHeader'>External links</a>
    <a href='https://www.repl.it/@Boiing587'>My repl.it page</a>
    <a href='https://www.google.com'>goloogoloo</a>
    <div class='buttons'>
      <button class='button' onclick='light()'>🔅</button>
      <button class='button' onclick='dark()'>🌙</button>
    </div>
  </div>

`);

mode = document.getElementById('mode');
function lightMode(){
  mode.setAttribute('href', 'light.css')
}

function lightStored(){
  localStorage.setItem('mode', 'light');
}

function darkMode(){
  mode.setAttribute('href', 'styles.css')
}

function darkStored(){
  localStorage.setItem('mode', 'dark');
}

function light(){
  lightMode()
  lightStored()
}

function dark(){
  darkMode()
  darkStored()
}

function getMode(){
  var x = localStorage.getItem('mode')
  if (x == "light") {
    mode.setAttribute('href', 'light.css')
  } else if (x == "dark") {
    mode.setAttribute('href', 'styles.css')
  }
}
