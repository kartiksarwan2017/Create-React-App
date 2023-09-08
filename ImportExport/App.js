/* Named Export can be done in 2 ways: 
   1. Export Individually
   2. Export at the bottom 
*/

/* 1. Export Individually */
// export let a = 10;
// export var arr = [1, 2, 3, 4, 5];
// export const obj = {name: "Alexa"};

// export function greet(){
//     console.log("Hello");
// }


/* 2. Exporting at the bottom */
let a = 10;
var arr = [1, 2, 3, 4, 5];
const obj = {name: "Alexa"};

function greet(){
    console.log("Hello");
}

export {a, arr, obj, greet};