const moment = require('moment');
class Account {
    #amount;
    #account_id;
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    tellMeBalanse()  {
        console.log(`sizning hisobingizdagi pul miqdori:, ${this.#amount}`)
        return this.#amount
    }
    pulYechibolish(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
         console.log(`Hisobdan ${amount}$ pul yechib olindi va hisobingizda qoldiq ${this.#amount}$`);
         } else {
         console.log(`sizning hisobingizda yetarli mablag yoq: hisobingiz ${this.#amount}$`);
         }
    }
    pulSolish(amount) {
        this.#amount += amount
        console.log(`hisobingiz toldirildi. Hisbingiz ${this.#amount}$`);
    }
    

    umumiyMalumot() {
        console.log(`Hurmatli ${this.name} sizning hisobingizda ${this.#amount}$ pul bor`);
        console.log(`sizning hisob raqamingiz ${this.#account_id}`);
    }
    static tellMeAboutClass() {
        console.log('bu class acauntlarni yasashda ishlatiladi');
    }
    static tellMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYYY - MM - DD ; HH:mm:ss")}`)
    }

}  
module.exports = Account;