/*-------------------------------------------------------
    1. ARROW FUNCTION
--------------------------------------------------------*/
const username = "Nevin PIE";
const getFirstColor = () => "Red";
console.log(getFirstColor());
/*-------------------------------------------------------
    2. ARROW FUNCTION WITH PARAMETER
--------------------------------------------------------*/
const great = (name) => {
    return `HELLO ${name}`;
};
console.log(great(username));
/*-------------------------------------------------------
    3. TEMPLATE
--------------------------------------------------------*/
let age = 19;
let message = `User ${username} is ${age} years old.`;
console.log(message);
/*-------------------------------------------------------
    4. OBJECT DESCTRUCTURING
--------------------------------------------------------*/
const student = {
    roll: 101,
    course: "MERN",
    city: "Hyderabad"
};
const { roll, course } = student;
console.log("Roll:", roll);
console.log("Course:", course);
/*-------------------------------------------------------
    5. ARRAY DESTRUCTURING
--------------------------------------------------------*/
const colors = ["Red", "Green", "Blue"];
const [firstColor] = colors;
console.log("Primary Color:", firstColor);

/*-------------------------------------------------------
    6. SPREAD OPERATOR
--------------------------------------------------------*/
const backend = ["Node.js", "MongoDB"];
const frontend = ["HTML", "CSS", "React"];
const fullStack = [...backend, ...frontend];
console.log("Full Stack Tools:", fullStack);
/*-------------------------------------------------------
    7. REST PARAMETERS
--------------------------------------------------------*/
const  calaculateTotal = (...prices) => {
    let total = prices.reduce((sum, value) => sum + value);
    return total;
};
console.log("Total Amount:",calaculateTotal(100, 200, 150));
/*-------------------------------------------------------
    8. CALLBACK FUNCTION
--------------------------------------------------------*/
function loadPage(callback) {
    console.log("Loading page...");
    callback();
}
loadPage(() => {
    console.log("Page loaded");
});
/*-------------------------------------------------------
    9. PROMISE
--------------------------------------------------------*/
const payment = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});
payment
    .then(res => console.log(res))
    .catch(err => console.log(err));
/*-------------------------------------------------------
    10. ASYNC AWAIT
--------------------------------------------------------*/
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await response.json();
        console.log("Users:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchData();
/*-------------------------------------------------------
    14. FETCH API
--------------------------------------------------------*/
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log("Post:", data))
/*-------------------------------------------------------
    16. JSON CONVERSION
--------------------------------------------------------*/
const order = {id: 1,item: "Laptop"};
const jsonString = JSON.stringify(order);
const parsed = JSON.parse(jsonString);
console.log("JSON:", jsonString);
console.log("Parsed:", parsed);
/*-------------------------------------------------------
    15. ERROR HANDLING
--------------------------------------------------------*/
try {
    let result = divide(10, 0);
} catch (e) {
    console.log("Error:", e.message);
}
/*-------------------------------------------------------
    19. EVENT LOOP
--------------------------------------------------------*/
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 0);

console.log("End");


