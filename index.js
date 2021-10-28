//============== ДЗ ============\\
/*
class MacBookPro {
   #price;
   constructor(inches = 'default', processor = 'M1Pro', memory = '16GB', storage = '1TB-SSD', price = 0) {
      this.inches = inches;
      this.processor = processor;
      this.memory = memory;
      this.storage = storage;
      this.#price = price;
   }
   getMacBookInfo() {
      return `Inches: ${this.inches},<br>Procesor: ${this.processor},<br>Memory: ${this.memory},<br>Storage: ${this.storage},<br>Цина: ${this.#price} $`;
   }
   getInches() {
      menu = +prompt('Диагональ екрана:\n1 - 14inch - 2000$\n2 - 16inch - 2500$');
      switch (menu) {
         case 1: {
            this.inches = '14-inch';
            this.#price = 2000;
            break;
         }
         case 2: {
            this.inches = '16-inch';
            this.#price = 2500;
            break;
         }
      }
   }
   setProcessor() {
      menu = +prompt('Процесор:\n1 - M1Max - +700$\n2 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.processor = 'M1Max';
            this.#price += 700;
            break;
         }
         case 2: {
            return this.processor;
         }
      }
   }
   setMemory() {
      menu = +prompt('Оперативна память:\n1 - 32GB - +200$\n2 - 64GB - +400$\n3 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.memory = '32GB';
            this.#price += 200;
            break;
         }
         case 2: {
            this.memory = '64GB';
            this.#price += 400;
            break;
         }
         case 3: {
            return this.memory;
         }
      }
   }
   setStorage() {
      menu = +prompt('Объем памяти:\n1 - 2TB-SSD - +400$\n2 - 4TB-SSD - +800$\n3 - 8TB-SSD - 1200$\n4 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.storage = '2TB-SSD';
            this.#price += 400;
            break;
         }
         case 2: {
            this.storage = '4TB-SSD';
            this.#price += 800;
            break;
         }
         case 3: {
            this.storage = '8TB-SSD';
            this.#price += 1200;
            break;
         }
         case 4: {
            return this.storage;
         }
      }
   }
}
let menu;
const myNewMacBookPro = new MacBookPro();
myNewMacBookPro.getInches();
myNewMacBookPro.setProcessor();
myNewMacBookPro.setMemory();
myNewMacBookPro.setStorage();
document.write(myNewMacBookPro.getMacBookInfo());
*/

