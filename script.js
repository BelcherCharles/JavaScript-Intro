// // // console.log("JavaScript works!");

// // // var myName = "Dwayne";
// // // console.log (myName);

// // // var myAge = 47;
// // // console.log (myAge);

// // // var sum = 2 + 2 + 2;
// // // console.log ("this should be 6", sum);

// // // var mathProblem = "2 + 2 + 2";
// // // console.log("This is a math problem", mathProblem);

// // // var likesPizza = true;
// // // console.log ("Does Dwayne like pizza", likesPizza);

// // // let is an updated version of var

// // let likesPizza = true;
// // likesPizza = false;
// // console.log (likesPizza);

// // let myAge = 47;
// // myAge = "cheese";
// // console.log (myAge);

// // // const cannot be changed once declared

// // const name = "Dwayne";
// // console.log(name.toUpperCase());



// // 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)

// var myName = "Charles";
// console.log (myName);
// // 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you hvae

// let numberOfPets = 3;
// console.log(numberOfPets);
// // 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)

// const socialSecurity = "000-00-xxxx";
// console.log(socialSecurity);

// const bio = `${myName} has ${numberOfPets} pet(s), and their SSN is ${socialSecurity}.`;
// console.log (bio);

// // Arrays!

//  const petNames = ["Puppy", "Scout", "Rudy"];
//  const myRealPet = "Puppy";
//  for (let i = 0; i < petNames.length; i++){
//      if (petNames[i] === "Puppy"){
//          console.log ("That's my real pet!")
//      }
//  console.log (petNames[i]);
//  }

 
//  // Conditionals
// // const hasPets = true;

// //  if (hasPets){
// //      alert("What are your pet's names?");
// //     }     else {
// //      alert ("You should get some pets");
// //     }




// // const age = 17;
// // const isCitizen = true;

// // if (age >= 21 && isCitizen){
// //     console.log("You can go vote and drink alcohol!");
// // }   else if (age >= 18 && isCitizen){
// //     console.log("You can vote!");
// // }   else {
// //     console.log("You probably get free health insurance and don't have to pay taxes!");
// // }

// // 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.

// const favoriteFoods = ["thai curry", "indian buffet", "turkey chili", "noodles", "sushi"]


// // 2. Loop through the array and log each food to the console
// for (let i = 0; i < favoriteFoods.length; i++){
//     if (favoriteFoods[i] === "noodles" || favoriteFoods[i] === "Noodles" || favoriteFoods[i] === "pasta" || favoriteFoods[i] === "Pasta") {
//     console.log ("Heck yeah!! Noodles!");
// }   else { 
//     console.log (favoriteFoods[i]);
// }}

// // 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.


// // Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 


// // Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp.

// // Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code. Object

// // Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky". Array

// // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// // const familyMembers = [
// // {
// //     Name: "Person1",
// //     DOB: "01/01/2001",
// //     hairColor: "brown",
// //     eyeColor: "brown",
// // },
// // {
// //     Name: "Person2",
// //     DOB: "01/01/2002",
// //     hairColor: "brown",
// //     eyeColor: "brown",
// // },
// // {
// //     Name: "Person3",
// //     DOB: "01/01/2003",
// //     hairColor: "brown",
// //     eyeColor: "brown",
// // },
// // {
// //     Name: "Person4",
// //     DOB: "01/01/2004",
// //     hairColor: "brown",
// //     eyeColor: "brown",
// // }
// // ]

// // console.log(familyMembers[0].DOB);

// // Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }
// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// for (i = 0; i < wardrobe.contents.length; i++) {
//     console.log(wardrobe.contents[i]);
// }

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// // Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// console.log(empireStateBuilding.stories);
// console.log(empireStateBuilding.height);
// console.log(empireStateBuilding.squareFeet);
// console.log(empireStateBuilding.eastWestLength);
// console.log(empireStateBuilding.northSouthLength);

// // Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// let address = (empireStateBuilding.address);
// let constructionDate = (empireStateBuilding.constructionDate);
// let cost = (empireStateBuilding.cost);
// let owner = (empireStateBuilding.owner);
// let architect = (empireStateBuilding.architect);


// const newForce = {
//     founded: 2018,
//     instructors: {
//         fullTime: ["Jordan", "Josh", "Kim"],
//     },
//     careerAdvisors: ["Natalie", "Kinsey"],
//     address: "1000 5th Ave, Huntington, WV 25701"
// }

// // Lightning Exercise 1: Output the names of the instructors to the console.

// const insArray = newForce.instructors.fullTime
// for (let i = 0; i < insArray.length; i++) {
//     console.log(insArray[i]);
// }
// // Lightning Exercise 2: Output the names of the career advisors to the console.

// const advArray = newForce.careerAdvisors
// for (let a = 0; a < advArray.length; a++) {
//     console.log(advArray[a]);
// }

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
    // Output the following value to the console.

    // Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He contributed heavily to the ${beatles.albums[3]} album.`);
