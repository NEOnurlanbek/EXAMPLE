// Modul package CORE
//Modul package EXTERNAL


//Modul package FILE

/*
const calculate = require('./hisob');
const natija = calculate.kopaytirish(80, 20);
console.log("natija", natija);
console.log("---------");
const natija2 = calculate.kopaytirish(80, 20);
console.log("natija2", natija2);
const natija3 = calculate.bolish(70, 20);
console.log(natija3);
*/

 // console.log(require("module").wrapper); /
// bu wrapper package "modul js" mizni qanaqa sintaksisi borligini korsatadi

//node.js da argument degan ozak oblecti bor u object 
//const moment = require("moment");
//const calculate = require('./hisob');
//console.log(arguments);


const Account = require("./account");

 const myAccount = new Account('NEO', 50000000, 97797);
 myAccount.tellMeBalanse();
 console.log("----------------");
Account.tellMeAboutClass();
console.log("---------------");
myAccount. pulYechibolish(10000000);
console.log("---------------");
myAccount.pulSolish(2000000)
console.log("---------------");
Account.tellMeTime();
console.log("---------------");
myAccount.umumiyMalumot();