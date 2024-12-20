const prompt = require('prompt-sync')();

let word1 = prompt("Enter the first word (RACECAR):");
let word2  = prompt("Enter the second word (RECORDER):");

function reverseString(str){
    return
    str.split('').reverse().join('');
}
 
let reversedWord1 = reverseString(word1);
let reverseWord2 = reverseString(word2);


console.log("Original word 1:" + word1);
console.log("Reversed word 1:" + reversedWord1);
console.log("Original word 2:" + word2);
console.log("Reversed word 2:" + reverseWord2);//33


console.log("Is Word 1 a palindrome? " + (word1 === reversedWord1));
console.log("Is Word 2 a palindrome? " + (word2 === reverseWord2));