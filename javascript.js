/**
 *
 * @source: http://www.lduros.net/some-javascript-source.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014  Loic J. Duros
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

var box_result= document.getElementById("text");
var value1;
var value2;
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
  box_result.value = box_result.value + 9;
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
    value2 = Number(box_result.value);
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
