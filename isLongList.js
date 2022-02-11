//output: boolean whether arr's length is >= 10

const prompt = require('prompt-sync')();

let arr = JSON.parse(prompt('give me an array with a length of at least 10: '))

if (arr.length >= 10) {
    console.log(true)
} else {
    console.log(false)
}


//["dog", "cat", "tiger", "elephant", "camel", "turtle", "dinobot" , "liger" , "panther" , "goat"]
