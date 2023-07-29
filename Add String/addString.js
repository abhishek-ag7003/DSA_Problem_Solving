/**
 * Step 1 : Create a function which will take 2 string as parameter and return a string as sum
 * Step 2 : First will find the length of both the string and store the greatest length in length variable
 * step 3 : Will run the for loop from 1 to the greatest length
 * step 4 : Check If string 1 [num1.length - i] and IF string 2 num2[num2.length - i] is not undefined
 * step 5 : Convert both the character to int and add then store in a sum variable
 * step 6 : create a global result string and prepend the sum in that string
 * Step 7 : If num2[num2.length -i] is undefined then I'll add with 0
 */

const num1 = "9";
const num2 = "1";

function addString(num1, num2) {
  let result = "";
  let length = num1.length > num2.length ? num1.length : num2.length;
  let carry = 0;

  for (let i = 1; i <= length; i++) {
    let stringSum = 0;
    let carryAdd = 0;
    if (num1[num1.length - i]) {
      if (num2[num2.length - i]) {
        stringSum = +num1[num1.length - i] + +num2[num2.length - i];
        if (carry != 0) {
          stringSum = stringSum + carry;
          carry = 0;
        }
        if (stringSum >= 10) {
          carryAdd = stringSum % 10;
          carry = Math.floor(stringSum / 10);
          stringSum = carryAdd;
        }
        result = stringSum + result;
      } else {
        stringSum = +num1[num1.length - i] + 0;
        if (carry != 0) {
          stringSum = stringSum + carry;
          carry = 0;
        }
        if (stringSum >= 10) {
          carryAdd = stringSum % 10;
          carry = Math.floor(stringSum / 10);
          stringSum = carryAdd;
        }
        result = stringSum + result;
      }
    } else {
      stringSum = 0 + +num2[num2.length - i];
      if (carry != 0) {
        stringSum = stringSum + carry;
        carry = 0;
      }
      if (stringSum >= 10) {
        carryAdd = stringSum % 10;
        carry = Math.floor(stringSum / 10);
        stringSum = carryAdd;
      }
      result = stringSum + result;
    }
  }
  if (carry != 0) {
    result = carry + result;
  }
  return result;
}

console.log(addString(num1, num2));
