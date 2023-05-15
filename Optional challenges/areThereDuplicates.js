// Unicorns Eat Popcorn, So Remember...

// U -> Understand the problem
// E -> Explore Examples
// P -> Pseudo code
// S -> Simplify/Solve
// R -> Re-factor


// UNDERSTAND THE PROBLEM
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)


// EXAMPLES
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true


// Time/Space -> O(n)
// PSEUDO CODE
// 1. Create an empty object.
// 2. Loop through the array (input) 
// 3. Check if a particular argument is stored in the object. If it's not then create its key with 'false' as its value.
// 4. If it's already stored/it exists in the object then return true.
// 5. Otherwise return false.


// Time/Space -> O(n)
function areThereDuplicatesWithFrequencyCounter(...args) {
  let obj = {}

  for (let element of args) {
    if (obj[element]) {
      //console.log(obj);
      return true;
    }
    obj[element] = 1;
  }

  //console.log(obj);
  return false;
}


// Time -> O(n log n), Space -> O(1)
// PSEUDO CODE
// 1. Use i and j as pointers.
// 2. Loop through the array from start with 'i' (pointer). 
// 3. Use another 'for' loop (within the previous one) to start from the end of the same array (to the element next to 'i') using 'j' (pointer).
// 4. If we a find a value that's equal to the one that we're tracking with 'i' return true.
// 5. Otherwise return false.


// Time -> O(n log n), Space -> O(1)
function areThereDuplicatesWithPointer(...args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = args.length - 1; j > i; j--) {
      if (args[i] === args[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(areThereDuplicatesWithFrequencyCounter(1, 2, 3, 3));
console.log(areThereDuplicatesWithPointer(1, 2, 3));