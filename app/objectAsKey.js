let a = { myName: 'sherlock', grade: 100 };
let b = { myName: 'watson', grade: 130 };

let people = {};
people[a] = 'first';
people[b]='second';
console.log(people);//{ '[object Object]': 'second' }
/**above output beacuse
 * All JavaScript object keys are strings. Even if you pass an object as a key, 
 * the object's toString() will be called on it
 * and the key will be stringified to [object Object].
 * then and if you add more one object as key it will override each other 
 * beacuse [object object ] will alway the key in every object you try to use 
 */
//so here Map become nice solution we can object ,string ,numbers,... as key 

let myMap=new Map();
myMap.set(a,'first');
myMap.set(b,"second");
console.log(myMap);
/**     OUT PUT 
 * Map(2) {
  { myName: 'sherlock', grade: 100 } => 'first',
  { myName: 'watson', grade: 130 } => 'second'
}
 */
