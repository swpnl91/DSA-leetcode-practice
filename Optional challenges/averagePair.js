// Unicorns Eat Popcorn, So Remember...

// U -> Understand the problem
// E -> Explore Examples
// P -> Pseudo code
// S -> Simplify/Solve
// R -> Re-factor


// UNDERSTAND THE PROBLEM
// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.
// Restrictions:
// Time: O(N)
// Space: O(1)


// EXAMPLES
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false


// PSEUDO CODE
// 1. Create two pointers i = 0 and j = array.length - 1 and set a variable answer = false.
// 2. While i < j, check if the average of the element at 'i' and the element at 'j' is equal to target average.
// 3. If average < targetAverage increase i by 1.
// 4. If average > targetAverage decrease j by 1.
// 4. If it's equal set answer = true, return answer.
// 5. If nothing return answer.


function averagePair(arr, targetAverage) {
  let i = 0;
  let j = arr.length - 1;
  let answer = false;

  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average < targetAverage) {
      i++;
    } else if (average > targetAverage) {
      j--;
    } else {
      answer = true;
      return answer;
    }
  }
  return answer;
}

console.log(averagePair([1, 2, 3], 2.5));
