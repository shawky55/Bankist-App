/**
 * /////////////////////////////////////////////
 * parctise on simple and useful method on Array

  **/
'use strict';


///////////SORTING 

//string
const owners=['jonas','zach','adam','martha'];
console.log(owners.sort())//mutate original array

//NUmbers
let numberSort=[43,2,66,199,2,-23]
// console.log(numberSort.sort()) sorting based on string 

/** how sort method work with numbers
 * 
 * when return >0 that make swithching between eleemnts
 * when return <0 that keep order 
 */

numberSort.sort((current,next)=>current-next);
/**
 * in example above when current smaller than next 
 * it return negative numbers so it mean keep original 
 * order so array will order ascending 
 * [ -23, 2, 2, 43, 66, 199 ]
 */
// console.log(numberSort)
//let numberSort=[43,2,66,199,2,-23]

numberSort.sort((current,next)=>next-current);
console.log(numberSort)
/** example
 * in example above when next become greater than current
 * that make next  before current in array so
 *  [43,2,66,199,2,-23]
 *  [43,66,2,199,2,-23]
 *  [43,66,199,2,2,-23]//end of first looping 
 * ---------------------
 * [66,43,199,2,2,-23]
 * [66,199,43,2,2,-23]//end of second looping 
 * -------------------------
 * [199,66,43,2,2,-23]
  *[199,66,43,2,2,-23] ->final result 
 */

/////////////////////////////////////////////Slice method

/** slice syntax 
 * slice()
  slice(start)
  slice(start, end)
 * it return new shallow  copy from array or string  
 */

let nums = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
let myName = 'Shawky';
// console.log(nums.slice(3)) //index 3 to end

// console.log(nums.slice(-3));//get last 3 element in array

// console.log(nums.slice(4,8))//length 4 ->[4,5,6,7]

// console.log(nums.slice(0))//return copy of whole array

// console.log(nums.slice())//return copy of whole array

// console.log(myName.slice(-1))
/////////////////////////////////////////////////
/////////////////////////////////////






///////////////////////////////////////////Splice Method

/**Synatx
 * splice(start)
   splice(start, deleteCount)
   splice(start, deleteCount, item1)
   splice(start, deleteCount, item1, item2, itemN)

 * start ->  The index at which to start changing the array.
 * deletCount(optional) ->  An integer indicating the number of elements in the array to remove from start.
 * itmeN->   The elements to add to the array, beginning from start.
 * splice change in array itself not shallow copy and return array of deleted element and if no element
 * deleted it return [] empty array
 * 
 */
let num2 = [...nums];
let spliceReturn;
// spliceReturn=num2.splice(0);//make arry empty and return same array
// spliceReturn=num2.splice(3, 2, 50, 70);
// [0,1,2,3,4,5,6,7,8,9,10] array
// [0,1,2,50,70,5,6,7,8,9,10] ->num2
//[3,4] -> spliceRetrun
// spliceReturn = num2.splice(-2,1); /*[0, 1, 2, 3, 4, 5, 6, 7, 8, 10]; , spliceReturn=[9]*/
// console.log(num2);
// console.log(spliceReturn);

///////////////////////////////////////////REVERSE Method
/**
 * does not mutate original array
 * metod return reversed array
 */
// let arr=[1,2,3,4,5];
// console.log(arr.reverse())

//////////////////////concat
let first5 = [1, 2, 3, 4, 5];
let last5 = [6, 7, 8, 9, 10];
let all10 = first5.concat(last5);
console.log(all10); /**[1, 2, 3, 4,  5, 6, 7, 8, 9, 10] */
console.log(last5.concat(first5)); /**[6, 7, 8, 9, 10,1, 2, 3, 4,5] */
/**
 * You can use spread operator to spread element of two array in one array
 */
console.log([...first5, ...last5]); /**[1, 2, 3, 4,  5, 6, 7, 8, 9, 10] */














////////////////////////////////////JOIN

/**
 * join()
 *join(separator)
RETURN 
  retrun string with sperator 
  or return empty string if arr.lenght=0
 */
const conditions = ['Wind', 'Water', 'Fire'];
conditions.join(); // 'Wind,Water,Fire'
conditions.join(', '); // 'Wind, Water, Fire'
conditions.join(' + '); // 'Wind + Water + Fire'
conditions.join(''); // 'WindWaterFire'



////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The entries() method returns an Array Iterator object with key/value pairs:

// for ( let [indx,value] of movements.entries()){
// console.log(`process ${++indx} ->>> ${value}$`);
// }

/***
 * YOU CAN NOT BREAK FOREACH METHOD FROM LOOPIN IN ARRAY
 */
// movements.forEach((mov,indx,arr)=>{
//   if(mov>0){
//     console.log(`Movement ${i+1}:You depsited ${mov}`)
//   }else{
//         console.log(`Movement ${i+1}:You withdrew ${Math.abs(mov)}`)

//   }
// })

let myMap = new Map([
  ['name', 'ahmed'],
  ['grade', 3],
  ['study', 'CS'],
]);
// use map with for of
// for(let [key,value] of myMap){
//   console.log(`key->>${key}:value->>>${value}`)
// }







///////////////////reduce Method

/**Example 0 of reduce method  */




// let arr=[1,2,3,4,4,4]
// let resutl=arr.reduce((accumlator,currentValue,indx,allarray)=>{
// console.log('acc',accumlator);
// console.log('current value',currentValue);
// console.log("indx",indx);
// console.log("all array",allarray);
// },0)
//reduece return one value not array



/**example one -sum array element  */

let numbersR=[1,2,3];
let sumof=numbersR.reduce((acc,current)=>{
return acc+current;
},0)
console.log("the sum of array using powerful reduce method  is ",sumof );



/**emxample two -get max vluae in array */
function getMaxValue(arrs) {
  let maxo = arrs.reduce((acc, mov) => {
   if (acc > mov) {
      return acc;
    } else {
      return mov;
    }
  }, arrs[0]);
  return maxo;
}
console.log('max value', getMaxValue([1, 8, 4]));




  let xArray=new Array(8);
  xArray.fill(1,1,5);//1,2,3,4
  console.log(xArray);

  //Array from
  /**
   * it really helpful to create array for array like object
   */
  const increamentArray=Array.from({length:10},(current,indx)=>1+indx);
  console.log(increamentArray)