// Jacqueline LaFontaine
// SBA 308 Module - Javascript - Scrap Paper

// SCRAP AREA: 

// will be calculating averages multiple times so could be a function instead to simplify? 
// a general function to calculate average
function calcAvg (a, b) {
    let sum = a + b; 
    let mean = sum / 2; 

    return mean;
}
console.log(calcAvg(47, 50)); // 48.5

// function to calculate GPA
function calcGPA (a, b, c, d) {
    let sum1 = a + b;
    let sum2 = c + d; 
    let mean = sum1 / sum2;

    return mean;
}

// going to test this works using the scores provided in the data
console.log(calcGPA(47, 150, 50, 150)); // 0.985

// testing how to add to an empty object

const objectTest = {};

objectTest["new file"] = "index.html";
// essentially [key] = "whatever value I input here"
// key can also be a variable

console.log(objectTest);

// testing the number constructor and how it proccess dates
// so it process the year into an integer but stops at the - 
console.log(Number.parseInt("3156-11-15"));

// date() testing

const currentDate = new Date();
console.log(currentDate);

const dueDate = new Date("2025-11-1");
console.log(dueDate);

// testing something about functions and function declarations vs. function expressions

console.log(goLogThis("BIBLO BAGGINSSSSSS"));
// can be hoisted
function goLogThis(wordHere) {
    return `Testing something here: ${wordHere}`; 

}

                    // anonymous function
const testFunction = function(test) {
     return `Running it back with anotha one! ${test}`;
    
}
// variable is equal to the function also cannot be hoisted
console.log(testFunction("YOLO SWAGGINSSSSSSS"));

// testing something with arrays
// only check for a passed value

// const testingArrayValidity = [];
// console.log(testingArrayValidity.isArray());
