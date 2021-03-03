// LATEST RATES

function convertCurrency(){
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const fromAmount = document.getElementById('fromAmount').value;
    const toAmount = document.getElementById('toAmount');

    fetch(`http://data.fixer.io/api/latest?access_key=f9d3515dbaf6817584bbd8dca9a4bad4&`)
    .then(response => response.json())
    .then(data => {
        const unit = data.rates[to] / data.rates[from]
        toAmount.value = (fromAmount * unit).toFixed(2)
    })
    .catch(err => {
        throw err
    })
};

const currencys = document.querySelectorAll('.currency');
const input = document.querySelector('.input')

currencys.forEach(currency => {
    currency.addEventListener('change', convertCurrency)
});

input.addEventListener('keyup', convertCurrency)

// HISTORICAL RATES

function convertCurrencyHistorical(){
    const date = document.getElementById('dateH').value
    const from = document.getElementById('fromH').value;
    const to = document.getElementById('toH').value;
    const fromAmount = document.getElementById('fromAmountH').value;
    const toAmount = document.getElementById('toAmountH');

    fetch(`http://data.fixer.io/api/${date}?access_key=f9d3515dbaf6817584bbd8dca9a4bad4&`)
    .then(response => response.json())
    .then(data => {
        const unit = data.rates[to] / data.rates[from]
        toAmount.value = (fromAmount * unit).toFixed(2)
    })
    .catch(err => {
        throw err
    })
};

const currencysH = document.querySelectorAll('.currencyH');
const inputsH = document.querySelectorAll('.inputH')

currencysH.forEach(currencyH => {
    currencyH.addEventListener('change', convertCurrencyHistorical)
});

inputsH.forEach(inputH => {
    inputH.addEventListener('keyup', convertCurrencyHistorical)
});