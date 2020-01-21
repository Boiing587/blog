function getnumber() {
  var x = document.getElementById('nomber').value;
  var y = document.getElementById('nomber').value;
  if (x == '') {
    document.getElementById('error').innerHTML = 'Enter a number dipshit'
    return;
  } else if (parseInt(x) > 100) {
    document.getElementById('error').innerHTML = 'More than 100% on a progress bar is literally impossible you psychopath'
    document.getElementById('nomber').value = ''
  } else {
  
  document.getElementById('nomber').value
  document.getElementById('nomber').value = '';
  x = x.toString() + 'px';
  document.getElementById('fill').style.width = x;
  document.getElementById('error').innerHTML = '';
  document.getElementById('percent').innerHTML = `${y}%`
  }
}

function plus() {
  var x = document.getElementById('fill').style.width;
  if (!x) {x = '0px'}
  if (parseInt(x.substring(0,x.length-2)) > 99) {
    x = '100px';
    document.getElementById('error').innerHTML = 'You can\'t go higher than 100%'
  } else {  
    x = parseInt(x.substring(0,x.length-2)) + 1;
    var y = x
    x = x.toString() + 'px';
    document.getElementById('fill').style.width = x;
    document.getElementById('error').innerHTML = '';
    document.getElementById('percent').innerHTML = x + '%'
    document.getElementById('percent').innerHTML = `${y}%`
  }
}

function minus() {
  var x = document.getElementById('fill').style.width;
  if (!x) { x = '0px' }
  if (parseInt(x.substring(0,x.length-2)) < 1) {
    document.getElementById('error').innerHTML = 'You can\'t go lower than 0%'
  } else {
    x = parseInt(x.substring(0, x.length - 2)) - 1;
    var y = x
    x = x.toString() + 'px';
    document.getElementById('fill').style.width = x;
    document.getElementById('error').innerHTML = '';
    document.getElementById('percent').innerHTML = x + '%'
    document.getElementById('percent').innerHTML = `${y}%`
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function auto() {
  var randomDelay = [
    1,
    3,
    5,
    10,
    25,
    40,
    60,
    100,
    125,
    150,
    175,
    200,
    250,
    300,
    400,
    750,
    1000,
    2000
  ]
  var x = '0px'
  var y = 0
  var z;
  document.getElementById('fill').style.width = '0px';
  document.getElementById('percent').innerHTML = '0%'
  for (let i = 0; i < 100; i++) {
    x = parseInt(x.substring(0, x.length - 2)) + 1;
    x = x.toString() + 'px';
    document.getElementById('fill').style.width = x;
    y += 1;
    document.getElementById('percent').innerHTML = `${y}%`
    var z = randomDelay[Math.floor(Math.random() * Math.floor(randomDelay.length - 1))]
    await sleep(z)
  }
}