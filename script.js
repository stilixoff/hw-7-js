const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//----------------------------------------------------------------------------------

function getMyTax(val) {
    return val * this.tax;
}
console.log(getMyTax.call(ukraine, 5000));

//----------------------------------------------------------------------------------

function getMiddleTaxes(val) {
    return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

//----------------------------------------------------------------------------------

function getTotalTaxes(val) {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(ukraine));

//----------------------------------------------------------------------------------

function getMySalary(val) {
    let res = {};
    res.salary = Math.floor(1500 + Math.random() * (2000 + 1 - 1500));
    res.taxes = Math.floor(this.tax * res.salary);
    res.profit = res.salary - res.taxes;
    return res;
}

setInterval(() => console.log(getMySalary(ukraine)), 10000);
