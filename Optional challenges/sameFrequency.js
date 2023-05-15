// U -> Understand the problem
// E -> Examples
// P -> Pseudo code
// S -> Simplify/Solve
// R -> Re-factor


// UNDERSTAND THE PROBLEM
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)


// EXAMPLES
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


// PSEUDO CODE
// 1. Create empty hash tables/objects to store the digits of the 1st & 2nd numbers as keys and their frequencies (in the same number) as their values.
// 2. Disintegrate the first number digit-by-digit.
// 3. Store the digits as keys (in object 1) with their values initialized to 1 (if it doesn't already exist).
// 4. OR if it already exists add 1 to its value.
// 5. Now disintegrate the 2nd number digit-by-digit and repeat steps 3 & 4 (can use a helper function) for object 2.
// 6. Loop through 1st object and check whether that digit exists in the 2nd object as a key.
// 7. If it doesn't exist OR if it does exist but their values are different then return false.
// 8. Otherwise return true.


function sameFrequency(int1, int2) {
  let obj1 = {};
  let obj2 = {};

  // Helper function to create objects with frequencies of a number's digits
  function createCounterObject(num, obj) {
    let digit;
    while (num > 0) {
      digit = num % 10
      if (obj[digit]) {
        obj[digit] = obj[digit] + 1;
      } else {
        obj[digit] = 1
      }
      num = Math.floor(num / 10);
    }
    return obj
  }

  createCounterObject(int1, obj1)
  createCounterObject(int2, obj2)

  console.log(obj1)
  console.log(obj2)

  for (key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

console.log(sameFrequency(3589578, 5879385));