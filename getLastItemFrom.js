//output: get last item from array

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array: '))

console.log(arr[arr.length -1])

//["dog", "cat", "tiger"]