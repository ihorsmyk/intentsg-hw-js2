//1. Створіть функцію яка клонує об'єкти
console.log("1. Створіть функцію яка клонує об'єкти");
const objCloner = (obj) => JSON.parse(JSON.stringify(obj));

const person = {
  name: "Bjarne Stroustrup",
  age: 72,
};

const anotherPerson = objCloner(person);
anotherPerson.skill = "C++";

console.log("person 1:", person);
console.log("person 2:", anotherPerson);

console.log("-".repeat(60));

//2. Створіть функцію яка порівнює два об'єкти
console.log("2. Створіть функцію яка порівнює два об'єкти");
const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let p in obj1) {
    if (obj1[p] !== obj2[p]) return false;
  }
  return true;
};

console.log(compareObjects(person, anotherPerson));

console.log("-".repeat(60));

/*3. Створіть об'єкт, який містить список товарів в інтернет-магазині. Кожен товар повинен мати назву, ціну та кількість на складі.
 Реалізуйте функцію, яка приймає назву товару та кількість, і повертає загальну вартість замовлення. */
console.log(
  "3. Створіть об'єкт, який містить список товарів в інтернет-магазині. Кожен товар повинен мати назву, ціну та кількість на складі.Реалізуйте функцію, яка приймає назву товару та кількість, і повертає загальну вартість замовлення."
);
const Shop = {
  goods: [
    {
      productName: "ice cream",
      price: 34.99,
      amount: 50,
    },
    {
      productName: "juice",
      price: 24.99,
      amount: 70,
    },
    {
      productName: "chocolate",
      price: 39.99,
      amount: 40,
    },
  ],

  order(goods, amount) {
    for (let i = 0; i < this.goods.length; i++) {
      if (goods.toLowerCase() === this.goods[i].productName) {
        if (this.goods[i].amount < amount) {
          return `there are only ${this.goods[i].amount} ${goods}s available`;
        }
        this.goods[i].amount -= amount;
        return `you have to pay ${(this.goods[i].price * amount).toFixed(
          2
        )} UAH for ${goods}`;
      }
    }
    return `${goods} is not available`;
  },
};

console.log(Shop.order("ice cream", 2));
console.log(Shop.order("juice", 3));
console.log(Shop.order("chocolate", 4));
console.log(Shop.order("beer", 10));

console.log("-".repeat(60));

/*4. Створити функцію-конструктор "Книга" з властивостями "назва", "автор" та "рік видання". 
Створити декілька об'єктів за допомогою цієї функції та вивести їх властивості у консоль.*/
console.log(
  '4. Створити функцію-конструктор "Книга" з властивостями "назва", "автор" та "рік видання". Створити декілька об\'єктів за допомогою цієї функції та вивести їх властивості у консоль.'
);
// class Book {
//   title;
//   author;
//   year;
//   constructor(title, author = "unknown author", year = "unknown year") {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   toString = function () {
//     return `title: ${this.title}\nauthor: ${this.author}\nyear: ${this.year}`;
//   };
// }

function Book(title, author = "unknown author", year = "unknown year") {
  this.title = title;
  this.author = author;
  this.year = year;
}

const bookKobzar = new Book("Kobzar", "Taras Shevchenko", 1840);
const codeComplete = new Book("Code Complete", "Steve McConnell", 1993);
const javaScriptforKids = new Book("JavaScript for Kids", "Nick Morgan", 2014);
console.log(bookKobzar);
console.log(codeComplete);
console.log(javaScriptforKids);

console.log("-".repeat(60));

//5. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.
console.log(
  "5. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом."
);
const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
//виводжу всі прості числа від 2 до 47
for (let i = 2; i < 50; i++) isPrime(i) && console.log(i);

console.log("-".repeat(60));

//6. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.
console.log(
  "6. Напишіть функцію, яка приймає на вхід число та повертає його факторіал."
);
const factorial = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;

  //або рекурсивно
  // if (n === 0) return 1;
  // return n * factorial(n - 1);
};

console.log("2: ", factorial(2));
console.log("5: ", factorial(5));
console.log("7: ", factorial(7));

console.log("-".repeat(60));

//7. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом
console.log(
  "7. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом"
);
const isPalindrom = (text) => {
  text = text.replace(/ /g, "");
  for (
    let i = 0, j = text.length - 1;
    i < Math.floor(text.length / 2);
    i++, j--
  ) {
    if (text[i] !== text[j]) return false;
  }
  return true;
};

console.log("кит на морі романтик", isPalindrom("кит на морі романтик"));
console.log("epos i nyni sope", isPalindrom("epos i nyni sope"));
console.log("timoxeline barbebutenol", isPalindrom("timoxeline barbebutenol"));

console.log("-".repeat(60));

//8. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром.
console.log(
  "8. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром."
);
const toUpper = (text) => text.toUpperCase();

console.log(toUpper("rusnya must die"));

console.log("-".repeat(60));

//9. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.
console.log(
  "9. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення."
);
const arrFilter = (arr) => arr.filter((el, i, arr) => arr.indexOf(el) === i);
console.log(
  arrFilter([
    "JS",
    "C#",
    "Java",
    "JS",
    "C++",
    "Kotlin",
    "TS",
    "Kotlin",
    "C#",
    "C#",
    "Java",
  ])
);

console.log("-".repeat(60));

//10. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".
console.log(
  '10. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".'
);
const formatTime = (date) => {
  let hours = date.getHours();
  let ampm = " AM";
  if (hours > 12) {
    hours -= 12;
    ampm = " PM";
  }
  return hours + ":" + date.getMinutes() + ampm;

  //або з секундами
  // return date.toLocaleTimeString();
};

console.log(formatTime(new Date()));
