"use strict";

const smokeInput = document.querySelectorAll('.smoke');
const mediumInput = document.querySelectorAll('.medium');
const smallInput = document.querySelectorAll('.small');
const largeInput = document.querySelectorAll('.large');
const hdbaInput = document.querySelectorAll('.hdba');
const juiceInput = document.querySelectorAll('.juice');
const coffeeInput = document.querySelectorAll('.coffee');
const teaInput = document.querySelectorAll('.tea');

const countNumberBtn = document.querySelector("#countNumber");

const inputsArraySmoke = [...smokeInput];
const inputsArrayMedium = [...mediumInput];
const inputsArraySmall = [...smallInput];
const inputsArrayLarge = [...largeInput];
const inputsArrayHdba = [...hdbaInput];
const inputsArrayJuice = [...juiceInput];
const inputsArrayCoffee = [...coffeeInput];
const inputsArrayTea = [...teaInput];

// معسل
function smoke() {
  const total = inputsArraySmoke.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalSmoke = document.getElementById('numberSmoke');
  const totalPiceSmoke = document.getElementById('totalSmoke');
  totalSmoke.value = total;
  totalPiceSmoke.value = total * 6;
};

// عادي
function medium() {
  let total = inputsArrayMedium.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalMedium = document.getElementById('numberMedium');
  const totalPiceMedium = document.getElementById('totalMedium');
  totalMedium.value = total;
  totalPiceMedium.value = total * 6;
};

// صاروخ
function small() {
  const total = inputsArraySmall.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalSmall = document.getElementById('numberSmall');
  const totalPiceSmall = document.getElementById('totalSmall');
  totalSmall.value = total;
  totalPiceSmall.value = total * 4;
};

// كانز
function hdba() {
  const total = inputsArrayHdba.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalHdba = document.getElementById('numberHdba');
  const totalPiceHdba = document.getElementById('totalHdba');
  totalHdba.value = total;
  totalPiceHdba.value = total * 11;
};


// ليمون
function large() {
  const total = inputsArrayLarge.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalLarge = document.getElementById('numberLarge');
  const totalPiceLarge = document.getElementById('totalLarge');
  totalLarge.value = total;
  totalPiceLarge.value = total * 8;
};

// عصير
function juice() {
  const total = inputsArrayJuice.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalJuice = document.getElementById('numberJuice');
  const totalPiceJuice = document.getElementById('totalJuice');
  totalJuice.value = total;
  totalPiceJuice.value = total * 13;
};

// قهوة
function coffee() {
  const total = inputsArrayCoffee.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalCoffee = document.getElementById('numberCoffee');
  const totalPiceCoffee = document.getElementById('totalCoffee');
  totalCoffee.value = total;
  totalPiceCoffee.value = total * 9;
};

// شاي
function tea() {
  const total = inputsArrayTea.reduce((acc, input) => {
    const value = parseFloat(input.value);
    return acc + (isNaN(value) ? 0 : value);
  }, 0);
  const totalTea = document.getElementById('numberTea');
  const totalPiceTea = document.getElementById('totalTea');
  totalTea.value = total;
  totalPiceTea.value = total * 5;
};

function sum() {
  smoke();
  medium();
  small();
  large();
  hdba();
  juice();
  coffee();
  tea();

  let totalPrice = document.getElementById("totalPrice");
  let total = [
    Number(document.getElementById('totalSmoke').value) + Number(document.getElementById('totalMedium').value) +
    Number(document.getElementById('totalSmall').value) + Number(document.getElementById('totalLarge').value) +
    Number(document.getElementById('totalHdba').value) + Number(document.getElementById('totalJuice').value) +
    Number(document.getElementById('totalCoffee').value) + Number(document.getElementById('totalTea').value)
  ];
  totalPrice.innerHTML = `المجموع: ${total} جنيه`;
}

countNumberBtn.addEventListener("click", sum);