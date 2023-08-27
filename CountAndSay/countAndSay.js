// Step 1 : Will check the input if it 1 (n===1) will return '1'
// Step 2: Will check the input if it is 2 (n===2) then will return '11'
// Step 3: If the input is greater then 2 will run a loop from 3 to n and the existing result is "11"
// Step 4 : Will create a tempString and count which will store the iteration result
// Step 5: Then will run an another loop from 1 till length of result string
// Step 6: Inside that loop will check if result[j] !== result[j-1] then will update the tempString and reset count by 1
// Step 7: Else the result[j] === result[j-1] then will just increase the count
// Step 8: After the end of inner loop will update the result string by tempString and return the result


const countAndSay = (n) => {
    if(n ===1) return '1';
    if(n === 2) return '11';
    
    let result = '11';
    for(let i = 3; i<=n;i++){
        let tempString = '';
        let count = 1;
        for(let j = 1;j<=result.length;j++){
            if(result[j] !== result[j-1]){
                tempString = tempString + count + result[j-1];
                count = 1;
            }
            else count++;
        }
        result = tempString;
    }
    return result;
}

console.log(countAndSay(7))