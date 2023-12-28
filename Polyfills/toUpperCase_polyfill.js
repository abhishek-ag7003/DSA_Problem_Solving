 /* Step 1: define the polyfill function in String prototype Object
 Step 2: For toUpperCase() poylfill create a result variable which stores the result string
 Step 3: The String on which we performing the operation is available in this
 Step 4: Will traverse the given string and then checking each character if it is in small case 
         then will convert that in uppercase by using character code
Step 5: As the charCode value of A = 65 and a = 97, So if the character is in lowercase then will add
       32 value in that character and append that in result, else if the char is in uppercase then will directly append it to result
Step 6: At the end will return result string */
 

String.prototype.customToUpperCase = function (){
    let result = "";
    for(let i =0 ;i<this.length;i++){
      const char = this[i];
      if(char >= 'a' && char <= 'z'){
        result+=String.fromCharCode(char.charCodeAt(0)-32);
      }else{
        result+=char;
      }
      
    }
    return result;
  }
  
  console.log('abhishek'.customToUpperCase())