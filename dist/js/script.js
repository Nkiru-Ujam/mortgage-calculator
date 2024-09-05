"use strict";

const mortgageAmount = document.querySelector(".amount");
const mortgageTerm = document.querySelector(".year");
const interestRate = document.querySelector(".rate");

const calBtn = document.querySelector(".cal");
const installmentEl = document.querySelector(".installment");
const totalEl = document.querySelector(".total");
const clearBtn = document.querySelector(".clear-btn");

const errorMessageOne = document.querySelector(".error-message-1");
const errorMessageTwo = document.querySelector(".error-message-2");
const errorMessageThree = document.querySelector(".error-message-3");
const errorMessageFour = document.querySelector(".error-message-4");

const resultDef = document.querySelector(".result");
const resultDis = document.querySelector(".results");

const currencySymbol = document.querySelector(".eurosign");
const yearsSymbol = document.querySelector(".years");
const percentSymbol = document.querySelector(".percent");

const firstEl = document.querySelector(".sign-input");
const secondEl = document.querySelector(".term-field");
const thirdEl = document.querySelector(".rate-field");

let valid = true;
let amount, term, rate;

mortgageAmount.addEventListener("change", (e) => {
  amount = Number(e.target.value);
});

mortgageTerm.addEventListener("change", (e) => {
  term = Number(e.target.value);
  console.log(term);
});

interestRate.addEventListener("change", (e) => {
  rate = Number(e.target.value);
  console.log(rate);
});

// document.querySelectorAll(".radio-btns").forEach((radio) => {
//   radio.addEventListener("click", () => {
//     radio.classList.toggle("active");
//   });
// });

// input fields

mortgageAmount.addEventListener("focus", () => {
  currencySymbol.style.backgroundColor = "hsl(61, 70%, 52%)";
  firstEl.style.outline = "1px solid hsl(61, 70%, 52%)";
});

mortgageAmount.addEventListener("blur", () => {
  currencySymbol.style.backgroundColor = "hsl(202, 86%, 94%)";
  firstEl.style.outline = "1px solid hsl(202, 55%, 16%)";
});

mortgageTerm.addEventListener("focus", () => {
  yearsSymbol.style.backgroundColor = "hsl(61, 70%, 52%)";
  secondEl.style.outline = "1px solid hsl(61, 70%, 52%)";
});

mortgageTerm.addEventListener("blur", () => {
  yearsSymbol.style.backgroundColor = "hsl(202, 86%, 94%)";
  secondEl.style.outline = "1px solid hsl(202, 55%, 16%)";
});

interestRate.addEventListener("focus", () => {
  percentSymbol.style.backgroundColor = "hsl(61, 70%, 52%)";
  thirdEl.style.outline = "1px solid hsl(61, 70%, 52%)";
});

interestRate.addEventListener("blur", () => {
  percentSymbol.style.backgroundColor = "hsl(202, 86%, 94%)";
  thirdEl.style.outline = "1px solid hsl(202, 55%, 16%)";
});

calBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(mortgageAmount, mortgageTerm, interestRate, calBtn);

  // Mortgage amount
  let amount = mortgageAmount.value;

  if (amount === "") {
    valid = false;
    errorMessageOne.style.display = "block";
    currencySymbol.style.backgroundColor = "red";
  } else {
    errorMessageOne.style.display = "none";
  }
  console.log(amount);

  // Mortgage term
  let term = mortgageTerm.value;

  if (term === "") {
    valid = false;
    errorMessageTwo.style.display = "block";
    yearsSymbol.style.backgroundColor = "red";
  } else {
    errorMessageTwo.style.display = "none";
  }

  // Interest rates

  let rate = interestRate.value;

  if (rate === "") {
    valid = false;
    errorMessageThree.style.display = "block";
    percentSymbol.style.backgroundColor = "red";
  } else {
    errorMessageThree.style.display = "none";
  }

  let selected = false;

  // // Radio Btns
  const radioBtns = document.querySelector("input[name='radio-btn']:checked");

  if (!radioBtns) {
    selected = true;
    errorMessageFour.style.display = "block";
  } else {
    errorMessageFour.style.display = "none";
  }
  console.log(radioBtns);

  // console.log(typeof amount, typeof term, typeof rate);

  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  let monthlyRepayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const totalPayment = monthlyRepayment * numberOfPayments;

  // console.log(typeof amount, typeof term, typeof rate);

  // console.log(monthlyRepayment, totalPayment);

  if (amount === "" || term === "" || rate === "" || !radioBtns) {
    resultDef.style.display = "block";
    return;
  } else {
    installmentEl.innerHTML = `&euro; ${monthlyRepayment.toFixed(2)}`;
    totalEl.innerHTML = `&euro; ${totalPayment.toFixed(2)}`;
    console.log(monthlyRepayment, totalPayment);

    resultDef.style.display = "none";
    resultDis.style.display = "block";
  }
});

// clear button

clearBtn.addEventListener("click", () => {
  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";

  console.log(clearBtn);
});
