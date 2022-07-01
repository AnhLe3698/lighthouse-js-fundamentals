const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let tenDollar = (change - (change % 1000)) / 1000;
  change = change % 1000;
  let twoDollar =  (change - (change % 200)) / 200;
  change = change % 200;
  let oneDollar =  (change - (change % 100)) / 100;
  change = change % 100;
  let quarter =  (change - (change % 25)) / 25;
  change = change % 25;
  let dime =  (change - (change % 10)) / 10;
  change = change % 10;
  let penny =  change;
  let cashRegister = {};
  if (tenDollar != 0) {
    cashRegister["tenDollar"] =  tenDollar;
  }
  if (twoDollar != 0) {
    cashRegister["twoDollar"] = twoDollar;
  }
  if (oneDollar != 0) {
    cashRegister["oneDollar"] = oneDollar;
  }
  if (quarter != 0) {
    cashRegister["quarter"] = quarter;
  }
  if (dime != 0) {
    cashRegister["dime"] = dime;
  }
  if (penny != 0) {
    cashRegister["penny"] = penny;
  }
  return cashRegister;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/