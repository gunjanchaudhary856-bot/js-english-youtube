console.log(2>1); //true
console.log(2<1); //false
console.log(2>=1); //true
console.log(2<=1); //false
console.log(2==1); //false
console.log(2!=1); //true

console.log("2" > 1); //true  -->automatically convert string to number
console.log("2" < 1); //false -->automatically convert string to number
console.log("2" >= 1); //true 
console.log("2" <= 1); //false
console.log("2" == 1); //false
console.log("2" != 1); //true

console.log(null >0); //false  __>because null is converted to 0 and 0 is not greater than 0
console.log(null <0); //false
console.log(null >=0); //true
console.log(null <=0); //true
console.log(null ==0); //false
console.log(null !=0); //true
 
console.log(undefined <0); //false  -->because undefined is converted to NaN and NaN is not a number so it will return false for all comparison operations
console.log(undefined >=0); //false
console.log(undefined <=0); //false
console.log(undefined ==0); //false
console.log(undefined !=0); //true

console.log(NaN >0); //false -->because NaN is not a number so it will return false for all comparison operations
console.log(NaN <0); //false
console.log(NaN >=0); //false
console.log(NaN <=0); //false
console.log(NaN ==0); //false
console.log(NaN !=0); //true

console.log(NaN >NaN); //false -->because NaN is not a number so it will return false for all comparison operations
console.log(NaN <NaN); //false
console.log(NaN >=NaN); //false
console.log(NaN <=NaN); //false
console.log(NaN ==NaN); //false
console.log(NaN !=NaN); //true

console.log(null > undefined); //false  -->beacause null is converted to 0 and undefined is converted to NaN
console.log(null < undefined); //false
console.log(null >= undefined); //false
console.log(null <= undefined); //false
console.log(null == undefined); //false
console.log(null != undefined); //true

/// === and !== operator
console.log(2 === 2); //true
console.log(2 !== 2); //false
console.log(2 === "2"); //false
console.log(2 !== "2"); //true


//different between == and === operator is that == operator will convert the data type to the same data type 
//and then compare it but === operator will not convert the data type to the same data type and then compare it.