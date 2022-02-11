//input: arr
//output: logs second char in third item/logs error if 3rd item is !string

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array to give you the second character in the third item: '))


if (typeof arr[2] !== 'string') {
    console.log('ERROR- This item is not a STRING!')
} else {
    console.log(arr[2][1])
}

// works with

//["dog", "cat", "tiger", "elephant", "camel"]

//["liger", "cat", 25, "elephant", "camel"]

//["liger", "cat", true, "elephant", "camel"]