/* Default Exports */

// let a = 10;
// var arr = [1, 2, 3, 4, 5];
// const obj = {name: "Alexa"};

// function greet() {
//     console.log("Hello");
// }

// export default greet;
// export {a, arr, obj};


let a = 10;
var arr = [1, 2, 3, 4, 5];
const obj = {name: "Alexa"};

export default function greet() {
    console.log("Hello");
}

export {a as b, arr, obj};