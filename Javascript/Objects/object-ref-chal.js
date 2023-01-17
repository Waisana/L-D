let myAccount = {
    name: 'Waisana Bosco',
    income:0,
    expense:0,
}
//add income to account
let addIncome = function (account, amount) {
    account.income = account.income + amount;
}
//add expense to account
let addExpenses = (account, amount)=>{
    account.expense= account.expense + amount;
}
//reset account
let resetAccount = function (account) {
    account.income = 0;
    account.expense = 0;
};
//get account summery
let getAccountSumery = function (account) {
    let balance = account.income - account.expense;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expense} in expenses`;

}

addIncome(myAccount, 20000);
console.log(myAccount);
addExpenses(myAccount, 5000);
addExpenses(myAccount, 2000);
console.log(myAccount);
console.log(getAccountSumery(myAccount));
resetAccount(myAccount);
console.log(getAccountSumery(myAccount));