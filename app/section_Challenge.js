'use strict';
/**CHALLENGE ONE  */
let juliaDogs = [10, 5, 6, 1, 4];
let kateDogs = [3, 5, 2, 12, 7];
function checkDogs(juliaDogs, kateDogs) {
  let correctJulaDogs = juliaDogs.slice(1, -2);
  let allDogs = [...correctJulaDogs, ...kateDogs];
  allDogs.forEach((dog, indx) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${indx + 1} is adult,and it has ${dog} years old`
      );
    } else {
      console.log(
        `Dog number ${indx + 1} is poppy,and it has ${dog} years old`
      );
    }
  });
}
checkDogs(juliaDogs, kateDogs);
///////////////////////////

/**CHALLENGE TWO **/
/**
 * first task -> looping on array and make operation on it is element
 *
 */
let dogsAge = [5, 2, 4, 1, 15, 8, 4];

// function CHALLENGE2(ages){
//     let humanAges=ages.map((age)=>{
//         let humanAge;
//         if(age<=2){
//         humanAge=age*2;
//         return humanAge;
//         }
//         if(age>2){
//             humanAge=16+age*4;
//             return humanAge;
//         }})

//     let adult=humanAges.filter(age=>age>=18);
//     let averageAges=adult.reduce((accumaltor,current)=>{
//     return accumaltor+current/adult.length;
//     },0)
//     return averageAges;
// }
// console.log('average ', CHALLENGE2(dogsAge));
// i  make code more simple usign temporay operator and arrow functoin
// but it try make it more readalble

/**CHALLENGE THree With Chaining method  */
function CHALLENGE_2Chaining(ages) {
  return ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce(
      (accumaltor, currnentValue, indx, arr) =>
        accumaltor + currnentValue / arr.length,
      0
    );
}

console.log('average ', CHALLENGE_2Chaining(dogsAge));

///////////////////////////

//CHALLENGE ONE with CHAINING METHOD AND ARROW FUNCTION

const checkDogs2 = (juliaDogs, kateDogs) => {
  juliaDogs
    .slice(1, -2)
    .concat(kateDogs)
    .forEach((dog, indx) =>
      dog >= 3
        ? console.log(
            `Dog number ${indx + 1} is adult,and it has ${dog} years old`
          )
        : console.log(
            `Dog number ${indx + 1} is poppy,and it has ${dog} years old`
          )
    );
};
checkDogs2(juliaDogs, kateDogs);

//////CHALLENGE FOUR
const dogs = [
  { weight: 22, curfood: 250, owners: ['Alice,Bob'] },
  { weight: 8, curfood: 200, owners: ['Matilda'] },
  { weight: 13, curfood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curfood: 340, owners: ['Michael'] },
];

// first task in challenge four
dogs.forEach((dog) => (dog.recommentedFoodPortion = dog.weight ** 0.75 * 28));

//second task in challenge four
let SarahObj = dogs.find((dog) => dog.owners.includes('Sarah'));

SarahObj['curfood'] > SarahObj['recommentedFoodPortion']
  ? console.log('sarah eating too much ')
  : SarahObj['curfood'] == SarahObj['recommentedFoodPortion']
  ? console.log('sarah doge eating okay')
  : console.log('sarah dog eating little');

//third task in challenge four

let etingToomuch = dogs
  .filter((dog) => dog['curfood'] > dog['recommentedFoodPortion'])
  .map((dog) => dog['owners'])
  .flat();

let eatingToolittle = dogs
  .filter((dog) => dog['curfood'] < dog['recommentedFoodPortion'])
  .map((dog) => dog['owners'])
  .flat();
let eatingOkay = dogs.some(
  (dog) =>
    dog['curfood'] > dog['recommentedFoodPortion'] * 0.9 ||
    dog['curfood'] < dog['recommentedFoodPortion'] * 1.1 ||
    dog['curfood'] == dog['recommentedFoodPortion'] * 0.9
);

let exactlyAmount = dogs.some(
  (dog) => dog['curfood'] === dog['recommentedFoodPortion']
);

let dogSorted=dogs.slice('').sort((dog1,dog2)=>dog1.recommentedFoodPortion-dog2.recommentedFoodPortion)


console.log('oweners have dogs eat too much ', etingToomuch);
console.log('oweners have dogs eat too little ', eatingToolittle);
console.log('oweners have dogs eat too okay', eatingOkay);
console.log('oweners have dogs eat exatly amount of food', eatingOkay);
console.log("dog soreted based on food recommented (asceding)",dogSorted)

