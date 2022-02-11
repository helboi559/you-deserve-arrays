//input: array
//output: first item in array

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array: '))

console.log(arr[0])

//["dog", "cat", "tiger"]