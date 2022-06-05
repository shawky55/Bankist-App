let x = '23';
console.log(Number(x));
console.log(+x);

// -------------------------
// Parsing
Number.parseInt('100px', 10); //string,regex(the base of number)
//----------------
//IsNaN
/**
 * is NaN not best way to check the varible is number or not
 * beacuse there case isNaN fail in it
 * isNaN(28/0)->false
 */

//--to check the value is number or not
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(23));
console.log(Number.isFinite(+'20x'));

//to check it is integer or not
console.log(Number.isInteger(23.5));

///root
Math.sqrt(25); //5

25 ** (1 / 2); //5

8 ** (1 / 3); //2

console.log(Math.max('100px', 5));

console.log(Math.round(100.5));
console.log(Math.ceil(100.4));
console.log(Math.ceil(100.6));
console.log(Math.floor(100.7));
console.log(+(100.3).toFixed(2));

// array.forEach(element => {
//     //every second time
//     //0 2 4 6 8 10 12 ....
//     if(element%2===0){
//         //////code
//     }
//     // every third time
//     // 0 3 6 9 12 ...
//     if(element%3===0){
//         //code
//     }
// });

/**
 * Numbers area represented internally as 64bits
 * only 53 used to repersent number it self
 * 11 used to store the position of decimal point and sign of number
 */
console.log(2 ** 53 - 1); //this biggest number js can saved

//BigInt
//how to use bigint number
console.log(538641874759834758934759083459348753498579834n);
//Operations
console.log(125n + 25n);

//DATE
const now = new Date();
console.log(now);
console.log(new Date(2035, 5, 3));
console.log(new Date(7 * 24 * 12 * 60 * 60 * 1000));

//Woriking with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); //the day of month
console.log(future.getDay()); //the day of the week
console.log(future.toISOString());
console.log(future.getTime());
//_________________

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(+Date);
// const Calcdaypassed = (date2, date1) => {
//   console.log('Calcdaypassed');
//   let re = (date2 - date1) / (1000 * 60 * 60 * 24 * 30 * 12);
//   return re.toFixed(1);
// };
// let result = Calcdaypassed(new Date(2037, 10, 19, 15, 23), new Date());
// console.log('passed Year', result);

//INterationalizing date

const num = 10200;
const numOptions = {
  style: 'unit',
  unit: 'kilometer-per-hour',
  useGrouping: true,
};
console.log(new Intl.NumberFormat('ar-EG', numOptions).format(num));

//SET TIME OUT
const ingredients = ['olives', 'checkn', 'cheese', 'meat'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is Your pizza with ${ing1} and ${ing2}`);
  },
  1000,
  ...ingredients
);
if (ingredients.includes('meat')) {
  clearTimeout(pizzaTimer);
}
