 /* Step 1: define the polyfill function in String prototype Object
 Step 2: For toLowerCase() poylfill create a result variable which stores the result string
 Step 3: The String on which we performing the operation is available in this
 Step 4: Will traverse the given string and then checking each character if it is in UPPER case 
         then will convert that in LOWERCASE by using character code
Step 5: As the charCode value of A = 65 and a = 97, So if the character is in lowercase then will subtract
       32 value in that character and append that in result, else if the char is in lowercase then will directly append it to result
Step 6: At the end will return result string */
 

String.prototype.customToLowerCase = function (){
    let result = "";
    for(let i =0 ;i<this.length;i++){
      const char = this[i];
      if(char >= 'A' && char <= 'Z'){
        result+=String.fromCharCode(char.charCodeAt(0)+32);
      }else{
        result+=char;
      }
      
    }
    return result;
  }
  
  console.log('ABHISHEK'.customToLowerCase())
