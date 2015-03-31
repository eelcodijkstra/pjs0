/*jslint browser: true, vars: true */
/*global $: true, alert: true, displayState: true, testA: true, testB: true, testC: true,
  mouseDown: true,
*/

var logging = true;
var logField = document.getElementById("logArea");

function log(s) {
  if (logging) {
    logField.value = logField.value + s + "\n";
  }
}

function clearLog() {
  logField.value = "// log \n";
}

function alert(str) {
  window.parent.window.alert(str);
}

var
  canvas, // the global Canvas element
  ctx;    // the global context for the used Canvas element

function initCanvas() {
  canvas = document.getElementById("mycanvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  } else {
    alert("no canvas found");
  }
}

// turtle graphics variables
var down = true;        // pen down
var dir = 0;             // current drawing direction (360 degrees? )
var pos = {x: 0, y: 0};  // current position

// sin and cos in degrees

function sin(d) {
  return Math.sin(d * Math.PI / 180);
}

function cos(d) {
  return Math.cos(d * Math.PI / 180);
}

function forward(n) {
  log("forward(" + n + ");");
  var dx = n * cos(dir);
  var dy = n * sin(dir);
  var newpos = {x: pos.x + dx, y: pos.y + dy};
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(newpos.x, newpos.y);
    ctx.stroke();
  }
  pos = newpos;
}

function penUp() {
  log("penUp();");
  down = false;
}

function penDown() {
  log("penDown();");
  down = true;
}

function right(n) {
  log("right(" + n + ");");
  while (dir + n < 0) { dir += 360; }
  dir = (dir + n) % 360;
}

// take turn with circle segment of deg degrees
// when deg < 0: left turn, deg > 0: right turn

function turnRight(rad, deg) {
  log("turnRight(" + rad + "," + deg + ");");
  var sgn = (deg < 0) ? -1 : 1;
  var corr = (deg < 0) ? 90 : 270;
  var cx = Math.round(pos.x - sgn * rad * sin(dir));
  var cy = Math.round(pos.y + sgn * rad * cos(dir));

  var k = Math.abs(2 * rad * sin(deg / 2));
  var dx =  k * cos(deg / 2 + dir);
  var dy =  k * sin(deg / 2 + dir);

  var start = (dir + corr) * Math.PI / 180;
  var end = (dir + deg + corr) * Math.PI / 180;
  var newx = Math.round(pos.x + dx);
  var newy = Math.round(pos.y + dy);
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
//    ctx.lineTo(newx, newy);
//    ctx.moveTo(pos.x, pos.y);
    ctx.arc(cx, cy, rad,  start, end, deg < 0);
    ctx.stroke();
  }
  pos.x = newx;
  pos.y = newy;
  while (dir + deg < 0) { dir += 360; }
  dir = (dir + deg) % 360;
}

function clearCanvas() {
  ctx.clearRect(0, 0, 200, 200);
  dir = 0;
  pos = {x: 100, y: 100};
  down = true;
  clearLog();
}

function repeat(n, f) {
  var i;
  for (i = 0; i < n; i += 1) {
    f(i);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

$(document).ready(function () {

  $("#forwardButton").on("click", function () {
    forward(parseInt($("#forwardCount").val(), 10));
    displayState();
  });

  $("#rightButton").on("click", function () {
    right(parseInt($("#rightCount").val(), 10));
    displayState();
  });

  $("#turnRightButton").on("click", function () {
    turnRight(
      parseInt($("#turnRightRadius").val(), 10),
      parseInt($("#turnRightCount").val(), 10)
    );
    displayState();
  });

  $("#upButton").on("click", function () {
    penUp();
    displayState();
  });

  $("#downButton").on("click", function () {
    penDown();
    displayState();
  });

  $("#clearButton").on("click", function () {
    clearCanvas();
    displayState();
  });

  $("#hideLogButton").on("click", function () {
    var button =  $("#hideLogButton");
    var logElt = $("#logArea");
    logging = !logging;
    if (!logging) {
      button.html("Show Log");
      logElt.hide();
    } else {
      button.html("Hide Log");
      logElt.show();
    }
  });
  
  $("#testAButton").on("click", function () {
    testA();
    displayState();
  });

  $("#testBButton").on("click", function () {
    var arg0 = parseInt($("#testBArg0").val(), 10);
    testB(arg0);
    displayState();
  });

  $("#testCButton").on("click", function () {
    var arg0 = parseInt($("#testCArg0").val(), 10);
    var arg1 = parseInt($("#testCArg1").val(), 10);
    testC(arg0, arg1);
    displayState();
  });

  $("#mycanvas").on('mousedown', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    mouseDown(mousePos.x, mousePos.y);
  });

  function displayState() {
    pos.x = Math.round(pos.x);
    pos.y = Math.round(pos.y);
    $("#xDisplay").val(pos.x);
    $("#yDisplay").val(pos.y);
    $("#dirDisplay").val(dir);
    $("#penDisplay").val(down);
  }

  initCanvas();
  clearCanvas();
  displayState();

});

//  ======== User-defined functions ============

// functions linked to buttons:

function testA() {
  forward(50);
  right(90);
}

function testB(x) {
  alert("not yet defined");
}

function testC(x, y) {
  alert("not yet defined");
}

function mouseDown(x, y) {
  alert("not yet defined");
}
