/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let cleanString = (str) => str.replace(/\s/g, "").toLowerCase()
  let sortedString = (str) => cleanString(str).split('').sort().join('')
  return sortedString(str1) === sortedString(str2)
}

module.exports = isAnagram;
