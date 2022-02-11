//output: get item at third index

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array: '))

if (arr.length >= 4) {
    console.log(arr[3])
} else {
    console.log(arr[arr.length-1])
}


//["dog", "cat", "tiger", "elephant", "camel"]