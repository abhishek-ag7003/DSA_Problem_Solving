// Step 1: Traverse the array and check each element
// Step 2: If the element is positive store it in the positive array at element value index i.e positiveArr[arr[i]] 
// Step 3: If the element is negative store it in the negative array at element value index i.e negatuveArr[arr[i]] 
// step 4: Then will traverse the positive array for length to 0
// Step 5: At the same we are checking if the array element is not null then will increment the target and check is it is equal to k then return the i



function findKthLargest(nums, k) {
    const positiveArr = [];
    const negativeArr = [];
    let klargest = 0;
  
    // Count the occurrences of each element in the array
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num >= 0) {
        positiveArr[num] = (positiveArr[num] || 0) + 1;
      } else {
        const curr = Math.abs(num);
        negativeArr[curr] = (negativeArr[curr] || 0) + 1;
      }
    }
  
    let target = 0;
  
    // Iterate through the positive values in reverse order
    for (let i = positiveArr.length - 1; i >= 0; i--) {
      if (target < k) {
        if (positiveArr[i]) {
          target += positiveArr[i];
        }
      }
  
      if (target >= k) {
        klargest = i;
        break;
      }
    }
  
    if (target < k) {
      // Iterate through the negative values
      for (let i = 0; i < negativeArr.length; i++) {
        if (target < k) {
          if (negativeArr[i]) {
            target += negativeArr[i];
          }
        }
  
        if (target >= k) {
          klargest = `-${i}`;
          break;
        }
      }
    }
  
    return klargest;
  }
  
  const arr = [55,55,8, 8, 7, 6, 5, 4, 3, 2, 1];
  console.log(findKthLargest(arr, 4)); // Output: 55
  