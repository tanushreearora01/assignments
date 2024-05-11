/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let str1 = str.toLowerCase()
    let chars = str1.split('')
    let vowels = 0
    console.log(chars)
    for(let i=0; i<chars.length; i++){
      if(chars[i]=='a'||chars[i]=='e'||chars[i]=='i'||chars[i]=='o'||chars[i]=='u')
        vowels++;
    }
    return vowels;
  }

module.exports = countVowels;