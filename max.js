console.log("hello world 😊");
// let arr=[1,4,6,9,10,55,32,6,12];
// let max=Math.max(...arr);
// console.log(max);
// console.log(process.argv);

let [, ,...arr]=process.argv;
// console.log(typeof(arr))
// console.log(arr)
let a=arr.map(Number);
console.log(Math.max(...a))