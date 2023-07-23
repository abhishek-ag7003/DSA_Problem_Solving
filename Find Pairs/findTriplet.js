// Input: const arr = [12,3, 4, 1, 6, 9];
//        const sum = 24;
// output : 12, 3, 9

// --------------------------------- Approach 1 ----------------------------------
/**
 * Step 1 : Create a function which will take two argument (arr, sum) and return an array of number
 * Step 2 : Will the traverse the array using 3 loop
 *          i : First loop will run from 0 to length, which will help to get first number
 *          j : Second loop will run from i+1 to length(n-1), which wil help to get second number
 *         k :  Third lopp will run from j+1 to length, which will help to get third number
 * Step 3 : Will check the condition if arr[i] + arr[j] + arr[k] -s equals to sum
 * Step 4 : Then will return the 3 element [arr[i], arr[j], arr[k]]
 */

const arr = [12, 3, 4, 1, 6, 9];
const sum = 24;

function findTriplet_v1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
}

const output_v1 = findTriplet_v1(arr, sum);

console.log(output_v1);

// --------------------------------- Approach 2 ----------------------------------

/**
 * Step 1 : Create a function which will take two argument (arr, sum) and return an array of number
 * Step 2: Will creating new object which is having values as the element of the giving array
 * Step 3 : In this approach will run only 2 loops to traverse the array (instead of 3 loop in previous approach)
 *          i : First loop will run from 0 to length, which will help to get first number & deleting that element from the object
 *          j : Second loop will run from i+1 to length(n-1), which wil help to get second number & deleting that element from the object
 * Step 4 : Now wil add arr[i] + arr[j] and subtract that from sum and store in new variable (leftSum)
 * Step 5: To get the third number will check if the leftSum is present in the object
 * Step 6 : If it is present, then will return the 3 element [arr[i], arr[j], leftSum]
 */

function findTriplet_v2(arr, sum) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  console.log(obj);
  for (let i = 0; i < arr.length; i++) {
    delete obj[arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      delete obj[arr[j]];
      const addedSum = arr[i] + arr[j];
      const leftSum = sum - addedSum;
      console.log(arr[i], arr[j], leftSum);
      if (obj.hasOwnProperty(leftSum)) {
        return [arr[i], arr[j], leftSum];
      }
    }
  }
}

const output_v2 = findTriplet_v2(arr, sum);

console.log("output_v2", output_v2);

// Problem with this solution is :
// If there are duplicate elements in the input array, the object (obj) will store only one instance of each unique element.
// Input : const arr = [3, 3, 0, 1, 4, 3]
// const sum = 9



