let students = ["Sara", "Samad", "Godwin", "Mohh"];
console.log(students[0]);
console.log(students.length);
students[3] = "Effiong";
console.log(students);

//adding elements to an array
students.push("Mohh"); //adds items to the end of the array
console.log(students);

students.unshift("Uzoma"); //adds items to the beginning of the array
console.log(students);

//removing elememts
students.pop(); //removes the last item in the array
console.log(students);
students.shift(); //removes the first item in the array
console.log(students);

//includes , indexOf
console.log(students.includes("Sara"));
console.log(students.indexOf("Sara"));

//higher order array method
//reverse sort slice splice

//reverse flips array in opposite direction
//sort arranges in alphabetical order
// slice copy an extracted portion of an array
//splice helps to add, remive and replace items in an array

students.reverse();
console.log("this is reversed:", students);
students.sort;
console.log("this is sorted:", students);

console.log("this is sliced:", students.slice(1, 3)); //returns a new array
console.log("this is spliced:", students.splice(1, 2));
console.log("this is the array:", students);

//higher order array ,method
//map filter, reduce, forEach, find, findIndex , some, every

//map mathod
const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
const marketList = ["rice", "beans", "yam", "bread", "plantain"];
const addedPrefix = marketList.map((item) => "i will buy;" + item);
console.log(addedPrefix);

// filter method
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion = ["dark", "fair", "medium", "fair", "dark"];
const darkComplexion = complexion.filter((item) => item === "dark");
console.log(darkComplexion);

/*const double = numbers.map((num) => {
    return num * 2;
})*/

//find: return firts matching value of te condition

const findFirstDark = complexion.find((item) => item === "dark");
console.log(findFirstDark);

const findIndexofDark = complexion.findIndex((item) => item === "dark");
console.log(findIndexofDark);

//reduce
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
console.log(multiply)
