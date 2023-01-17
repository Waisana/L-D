let myAccount ={
    name: 'Bosco Waisana',
    expense: 0,
    income: 0,
}
let otherAccount =myAccount;
otherAccount.income =1000;
// otherAccount ={};

let addExpense = function(account, amount) {
    account ={};
    account.expense =account.expense + amount;
    console.log(account);
}

addExpense(myAccount, 50000);
console.log(myAccount);