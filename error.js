let add = 2 + 3 -(4 + 5)
console.log(add)

//syntax error; error: missing ) after argument list
// let add = 2 + 3 -(4 + 5
// console.log(add)

let myName = "Adegboyega Adeyemi"
console.log(myName) //reference error; error: name is not defined
//reference error; e
// 
// myName is not defined
// console.log(myName)

//type error; error: myName.length is not a function

console.log(myName.length)

try{
    //code that may throw an error
    let result = 10 / 0
    console.log(result)
   undefinedFunction() 
    console.log("this will throw a reference error")
} catch (error) {
    console.error("An error occurred:", error.message);
}

console.log("this will run after the error is handled")

//finally block and how it works
function loadUserData() {
    try {
        // Simulating an error
        if (userId <= 0) {
            throw new Error("user ID must be a positive number");
        }
        console.log("Data loaded for user:" + userId);
    } catch (error) {
        console.error("failed to load data:", error.message);
    } finally {
        console.log("loading complete,closing connection.");
    }
}

loadUserData(0); // Simulating an error with a negative user ID

function registerStudent(name, age) {
    try {
        if (!name || !name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log
    } catch (error) {
        console.error("Registration failed:", error.message);
    }
}

registerStudent("bola okafor", 22)
registerStudent("", 22)
registerStudent("kemi", 12)