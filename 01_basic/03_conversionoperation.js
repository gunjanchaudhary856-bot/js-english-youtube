
//datatype and its conversion.......................

let score = 33;
console.log(typeof score)  //number
console.log(typeof(score))  //number
let valueInnumber  = Number(score) 
console.log(valueInnumber);  //33
console.log(typeof  valueInnumber); //number99


let scor = "33abc";
console.log(typeof scor)  //string
console.log(typeof(scor))  //string
let valueInnumbe  = Number(scor)  
console.log(valueInnumbe);  //  output NaN --------> not a number 
console.log(typeof  valueInnumbe); //number

let a = true;
console.log(typeof a); //boolean
let val = Number(a);
console.log(val); // 1 
console.log(typeof val); //number

let c = null;
console.log(typeof c); //object 
let val1 = Number(c);
console.log(val1); //0
console.log(typeof val1); //number


let d = undefined;
console.log(typeof d); // undefined
let val2 = Number(d);
console.log(val2); //NaN
console.log(typeof val2); //number

let isloggedin = "gunjan"
console.log(isloggedin); //gunjan
console.log(typeof isloggedin); //string 
let booleanisloggedin = Boolean(isloggedin);
console.log(booleanisloggedin); // true
console.log(typeof booleanisloggedin); //boolean

let isloggedi = "";
let z = Boolean(isloggedi);
console.log( typeof isloggedi); //string 
console.log()

//1 -> true   0 -> false
// "" -> false
// "gunjan"  -> true

let some = 33

let so = String(some)
console.log(some) //33
console.log(typeof some) //number
console.log(typeof so) //string

/*Number()  → converts to Number
String()  → converts to String
Boolean() → converts to Boolean
typeof    → checks datatype
*/

/*
typeof → datatype check

Number()
"33"      → 33
"33abc"   → NaN
true      → 1
false     → 0
null      → 0
undefined → NaN

Boolean()
1         → true
0         → false
"gunjan"  → true
""        → false

String()
33        → "33"
true      → "true"
*/