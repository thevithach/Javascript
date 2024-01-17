'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/
// const interface = 'Audio';
// const private = 534;
/*
function logger() {
    console.log('My name is Thevi');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/
/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2007);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2007);
console.log(age1, age2);
*/
/*
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2007);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2007, 'Thevi'));

*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return retirement;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired 🎉`;
    }
}

console.log(yearsUntilRetirement(2000, 'Thevi'));
console.log(yearsUntilRetirement(1970, 'Thevi'));
*/

/*
//literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
//array constructor
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const firstName = 'Thevi';
const thevi = [firstName, 'Thach', 2037 - 2000, 'student', friends];
console.log(thevi);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years1 = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
console.log(ages);
*/
/*
const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);
*/
/*
// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// returns index of element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// returns true or false
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/
/*
const theviArray = [
    'Thevi',
    'Thach',
    2037 - 2000,
    'student',
    ['Michael', 'Peter', 'Steven']
];

const thevi = {
    firstName: 'Thevi',
    lastName: 'Thach',
    age: 2037 - 2000,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(thevi);
// Dot notation
console.log(thevi.lastName);
// Bracket notation
console.log(thevi['lastName']);

const nameKey = 'Name';
console.log(thevi['first' + nameKey]);
console.log(thevi['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Thevi? Choose between firstName, lastName, age, job, and friends');


if (thevi[interestedIn]) {
    console.log(thevi[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

thevi.location = 'Australia';
thevi['twitter'] = '@thevi';
console.log(thevi);

// Challenge
// "Thevi has 3 friends, and her best friend is called Michael"
console.log(`${thevi.firstName} has ${thevi.friends.length} friends, and her best friend is called ${thevi.friends[0]}`);

*/
/*
const thevi = {
    firstName: 'Thevi',
    lastName: 'Thach',
    birthYear: 2000,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};
console.log(thevi.calcAge());
// console.log(thevi.calcAge(2000));

console.log(thevi.age);
console.log(thevi.age);
console.log(thevi.age);

// Challenge
// "Thevi is a 37-year old student, and he has a driver's license"

console.log(thevi.getSummary());
*/
/*
console.log('Lifting weights repetition 1 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/
/*
const types = [];

const theviArray = [
    'Thevi',
    'Thach',
    2037 - 2000,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];


for (let i = 0; i < theviArray.length; i++) {
    console.log(theviArray[i], typeof theviArray[i]);

    // Filling types array
    // types[i] = typeof theviArray[i];
    types.push(typeof theviArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');

for (let i = 0; i < theviArray.length; i++) {
    if (typeof theviArray[i] !== 'string') continue;
    console.log(theviArray[i], typeof theviArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');

for (let i = 0; i < theviArray.length; i++) {
    if (typeof theviArray[i] === 'number') break;
    console.log(theviArray[i], typeof theviArray[i]);
}
*/


const theviArray = [
    'Thevi',
    'Thach',
    2037 - 2000,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4

// for (let i = 0; i < theviArray.length; i++) {
//     console.log(i, theviArray[i]);
// }

// Backwards
// 4, 3, ..., 0
/*
for (let i = theviArray.length - 1; i >= 0; i--) {
    console.log(i, theviArray[i]);
}

const exerciseArray = ['push-ups', 'pull-ups', 'sit-ups', 'squats'];

// Loop inside a loop
for (let exercise = 0; exercise < exerciseArray.length; exercise++) {
    console.log(`-------- Starting exercise ${exerciseArray[exercise]} --------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exerciseArray[exercise]}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/

// For loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// While loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// Random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}