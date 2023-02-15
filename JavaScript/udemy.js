function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));


// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

// function validAnagram(val1, val2) {
//   //   add whatever parameters you deem necessary - good luck!
//   const valObj1 = {};
//   const valObj2 = {};

//   for (let val of val1) {
//     valObj1[val] = (valObj1[val] || 0) + 1;
//   }

//   for (let val of val2) {
//     valObj2[val] = (valObj2[val] || 0) + 1;
//   }

//   for (let val in valObj1) {
//     if (!(val in valObj2)) {
//       return false;
//     }
//     if (valObj1[val] !== valObj2[val]) {
//       return false;
//     }
//   }

//   return true;
// }

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    const lookup = {};
    
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
        return false;
        } else {
        lookup[letter] -= 1;
        }
    }
    
    return true;
}
console.log(validAnagram("", ""));
console.log(validAnagram("cinema", "iceman"));
console.log(validAnagram("cinema", "icema"));
