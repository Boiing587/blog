function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += (e.keyCode.toString());
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = (e.keyCode.toString());
  });
}

onKonamiCode(function () {window.location.href = '/test'})
