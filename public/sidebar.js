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

function lightCookie(){
  document.cookie = "mode=light; expires=Fri, 1 Jan 2021 12:00:00 UTC; path=/";
}

function darkMode(){
  mode.setAttribute('href', 'styles.css')
}

function darkCookie(){
  document.cookie = "mode=dark; expires=Fri, 1 Jan 2021 12:00:00 UTC; path=/";
}




function light(){
  lightMode()
  lightCookie()
}

function dark(){
  darkMode()
  darkCookie()
}

function getCookie(){
  var x = document.cookie;
  if (x.indexOf('mode=light') > -1) {
    mode.setAttribute('href', 'light.css')
  } else if (x.indexOf('mode=dark') > -1) {
    mode.setAttribute('href', 'styles.css')
  }
}
