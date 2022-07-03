var box_result= document.getElementById("text");
var value1;
var value2;
var result;
var operation;

function number1() {
  box_result.value = box_result.value + 1;
}

function number2() {
  box_result.value = box_result.value + 2;
}

function number3() {
  box_result.value = box_result.value + 3;
}

function number4() {
  box_result.value = box_result.value + 4;
}

function number5() {
  box_result.value = box_result.value + 5;
}

function number6() {
  box_result.value = box_result.value + 6;
}

function number7() {
  box_result.value = box_result.value + 7;
}

function number8() {
  box_result.value = box_result.value + 8;
}

function number9() {
  frame.value = box_result.value + 9;
}

function number0() {
  box_result.value = box_result.value + 0;
}

function punto() {
  box_result.value = box_result.value + ".";
}

function buttonAdd() {
  if(value1 != undefined) {
    operation = "+";
    box_result.value = "";
  }else {
    value1 = Number(box_result.value);
    operation = "+";
    box_result.value = "";
  }
}

function buttonSub() {
  if(value1 != undefined) {
    operation = "-";
    box_result.value = "";
  }else {
    value1 = Number(box_result.value);
    operation = "-";
    box_result.value = "";
  }
}

function buttonMul() {
  if(value1 != undefined) {
    operation = "x";
    box_result.value = "";
  }else {
    value1 = Number(box_result.value);
    operation = "x";
    box_result.value = "";
  }
}

function buttonDiv() {
  if(value1 != undefined) {
    operation = "/";
    box_result.value = "";
  }else {
    value1 = Number(box_result.value);
    operation = "/";
    box_result.value = "";
  }
}

function buttonClear() {
  box_result.value = "";
}

function buttonRes() {
  if (operation === "+") {
    value2 = Number(box_result.value);
    box_result.value = value1 + value2;
    value1 = undefined;
  } else if (operation === "-") {
    value2 = Number(box-result.value);
    box_result.value = value1 - value2;
    value1 = undefined;
  } else if (operation === "x") {
    value2 = Number(box_result.value);
    box_result.value = value1 * value2;
    value1 = undefined;
  } else if (operation === "/") {
    value2 = Number(box_result.value);
    box_result.value = value1 / value2;
    value1 = undefined;
  }
}
