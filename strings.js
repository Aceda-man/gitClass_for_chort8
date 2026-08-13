let name = "Adeyemi"
console.log(name.toUpperCase()) // Output: "ADEYEMI"
console.log(name.toLowerCase()) // Output: "adeyemi"

function lowerMe (value) {
    return value.toLowerCase()
}
console.log(lowerMe(name)) // Output: "adeyemi"


//trim(), trimStart(), trimEnd()
const trimExample = "   Hello, World!   ";
console.log(trimExample.trim()); // Output: "Hello, World!"
console.log(trimExample.trimStart()); // Output: "Hello, World!   "
console.log(trimExample.trimEnd()); // Output: "   Hello, World!"

//startsWith(), endsWith()
const startsWithExample = "Hello, World!";
const endsWithExample = "Hello, World!";
console.log(startsWithExample.startsWith("Hello")); // Output: true
console.log(endsWithExample.endsWith("World!")); // Output: true