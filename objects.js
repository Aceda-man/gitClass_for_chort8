let obj = {
  name: 'Adegboyega Adeyemi',
  age: 30,
  gender: "non-binary",
  complexion: "dark",
}

let phone = {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 350000
}

phone.color = "Black"
console.log(phone)

//adding a new property to an object
let student = {
    name: "Jon love",
    regNo: "123456",
    course: "Computer Science",
    year: 2023,
    friends: ["james", "jane", "joe", "jim", "jess" ,"esther"]
}

console.log(student)
student.age = 20
console.log(student)
student.course = "Node.js"
console.log(student)
delete student.year
console.log(student)

let employee = {
    name: "Tunde Balogun",
    role: "Software Engineer",
    salary: 500000,
    city: "Lagos",
}
//withouth destructuring
let hisName = employee.name
let hisRole = employee.role
//with destructuring
const {name, role, salary, city} = employee
console.log(employee)