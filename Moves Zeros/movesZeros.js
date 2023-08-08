/** 
 * Step 1: Will traverse array from start to end
 * Step 2: Will maintain on pointer initialize by 0
 * step 3: While looping the input if found any non zero element will push that at currIndex position
 * Step 4: At end will assign 0 to rest of the array from currIndex to array length
*/

const input = [1,1,1,0,0,0,1,1,1,1,0,0,0]

function moveZeroes (nums){
    let currIndex = 0;
    nums.forEach((ele)=>{
        if(ele !== 0){
            nums[currIndex] = ele;
            currIndex = currIndex + 1;
        }
    })

    for(let i=currIndex;i<nums.length;i++){
        nums[i] = 0;
    }
    return nums;
}

console.log(moveZeroes(input))