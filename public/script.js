document.write(`<link rel="stylesheet" href="${localStorage.getItem('mode')}.css" id='mode'>`);
var mode = document.getElementById('mode');
if (mode != 'light' && mode != 'styles') {
  localStorage.setItem('mode', 'styles')
  document.write(`<link rel="stylesheet" href="${localStorage.getItem('mode')}.css" id='mode'>`)
}

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
  var x = document.getElementsByClassName('trash')
  lightMode();
  for (var i = 0; i < x.length; i++) {
    x[i].src = 'img/light.png'
  }
}

function dark(){
  var x = document.getElementsByClassName('trash')
  darkMode();
  for (var i = 0; i < x.length; i++) {
    x[i].src = 'img/styles.png'
  }
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
    <div class='buttons'>
      <button class='button' onclick='light()'>🔅</button>
      <button class='button' onclick='dark()'>🌙</button>
    </div>
  </div>

`);

function getClass(num) {
  localStorage.setItem('postIndex', num);
  window.location.href = '/delete'
}

var cookies = {
  set: function (cname, cvalue, cexpires, cpath) {
    (!cvalue) && (cvalue = null);
    (!cexpires) && (cexpires = 'Tue, 19 Jan 2038 03:14:07 UTC');
    (!cpath) && (cpath = '/');
    document.cookie = cname + '=' + cvalue + '; expires=' + cexpires + '; path=' + cpath;
  },
  get: function (cname) {
    var cname = cname + '=';
    var dcookie = decodeURIComponent(document.cookie);
    var scookie = dcookie.split(';');
    for (var i = 0; i < scookie.length; i++) {
      var c = scookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return '';
  },
  clear: function () {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}

function codeSubmit() {
  var key = document.getElementById('codeInput').value;
  document.getElementById('codeInput').value = '';
  console.log(key)
  cookie.set('inputKey', key)
}

localStorage.setItem('confirmed', 0)
function rmvDisable() {
  var name = document.getElementById('name').value;
  var postTitle = localStorage.getItem('postTitle')
  if (name == postTitle) {
    document.getElementById('disabled').classList.remove('disabled');
    document.getElementById('error').innerHTML = '';
    localStorage.setItem('confirmed', 1)
    document.getElementById('name').value = '';
  } else {
    document.getElementById('disabled').classList.add('disabled');
    document.getElementById('error').innerHTML = 'That wasn\'t correct, try again.';
    document.getElementById('name').value = '';
  }
}

function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () { 
  alert('whom\'st enter illegal code?!');
  window.location = 'https://www.youtube.com/watch?v=wDgQdr8ZkTw'
});