'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Thevi',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me', me);
