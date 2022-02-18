const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const btn = document.querySelector('.btn');

const monthlyPayment = document.querySelector('#monthly-paymentIN');
const total = document.querySelector('#totalIN');
const totalInterest = document.querySelector('#total-interestIN');
const loader = document.querySelector('#loader');
const output = document.querySelector('#output');
const error = document.querySelector('#error');


function recalculation(amountValue, interestValue, yearsValue) {
    const totalInterestValue = ((amountValue * interestValue / 100) * yearsValue).toFixed(2);
    const totalValue = Number(totalInterestValue) + Number(amountValue);
    const monthlyPaymentValue = (totalValue / (yearsValue * 12)).toFixed(2);
    monthlyPayment.value = monthlyPaymentValue;
    total.value = totalValue;
    totalInterest.value = totalInterestValue;

}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const amountValue = amount.value;
    const interestValue = interest.value;
    const yearsValue = years.value;
    if (amountValue && interestValue && yearsValue) {
        loader.classList.toggle('loaderBlock');
        setTimeout(() => {
            error.classList.add('loaderNonBlock');
            loader.classList.toggle('loaderBlock');
            output.classList.remove('loaderNonBlock');
            recalculation(amountValue, interestValue, yearsValue)
        }, 800);
    } else {
        loader.classList.toggle('loaderBlock');
        setTimeout(() => {
            loader.classList.toggle('loaderBlock');
            error.classList.remove('loaderNonBlock');
        }, 800);
    }


})