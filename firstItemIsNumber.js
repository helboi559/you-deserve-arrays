//output: boolean whether arr's first item is a number

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array with a length of at least 10: '))

if (typeof arr[0] === 'number') {
    console.log(true)
} else {
    console.log(false)
}

// works with

//["dog", "cat", "tiger", "elephant", "camel"]

//[6, "cat", "tiger", "elephant", "camel"]