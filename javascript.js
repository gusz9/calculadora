var frame = document.getElementById("text");
var a;
var b;
var resultado;
var operation;

function number1() {
  frame.value = frame.value + 1;
}

function number2() {
  frame.value = frame.value + 2;
}

function number3() {
  frame.value = frame.value + 3;
}

function number4() {
  frame.value = frame.value + 4;
}

function number5() {
  frame.value = frame.value + 5;
}

function number6() {
  frame.value = frame.value + 6;
}

function number7() {
  frame.value = frame.value + 7;
}

function number8() {
  frame.value = frame.value + 8;
}

function number9() {
  frame.value = frame.value + 9;
}

function number0() {
  frame.value = frame.value + 0;
}

function punto() {
  frame.value = frame.value + ".";
}

function buttonAdd() {
  if(a != undefined) {
    operation = "+";
    frame.value = "";
  }else {
    a = Number(frame.value);
    operation = "+";
    frame.value = "";
  }
}

function buttonSub() {
  if(a != undefined) {
    operation = "-";
    frame.value = "";
  }else {
    a = Number(frame.value);
    operation = "-";
    frame.value = "";
  }
}

function buttonMul() {
  if(a != undefined) {
    operation = "x";
    frame.value = "";
  }else {
    a = Number(frame.value);
    operation = "x";
    frame.value = "";
  }
}

function buttonDiv() {
  if(a != undefined) {
    operation = "/";
    frame.value = "";
  }else {
    a = Number(frame.value);
    operation = "/";
    frame.value = "";
  }
}

function buttonClear() {
  frame.value = "";
}

function buttonRes() {
  if (operation === "+") {
    b = Number(frame.value);
    frame.value = a + b;
    a = undefined;
  } else if (operation === "-") {
    b = Number(frame.value);
    frame.value = a - b;
    a = undefined;
  } else if (operation === "x") {
    b = Number(frame.value);
    frame.value = a * b;
    a = undefined;
  } else if (operation === "/") {
    b = Number(frame.value);
    frame.value = a / b;
    a = undefined;
  }
}
