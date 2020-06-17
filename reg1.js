console.log("here is regularexpression file.js is here");
// //make regularexpression literal
let reg = /joban/;
console.log(reg);
// // how to get out /joban/ from the forward slashs.

console.log(reg.source)//use the "source" to get content from regular expressions

let s = "tHiS is this great code with joban and joban";
console.log("------- flags,input,index,.exe function start--------");
//FUNCTIONS TO MATCH EXPRESSIONS.
// 1) exec() ---> this function will return an array for match or null for no match

let result = reg.exec(s);
console.log(result);

/* flags in regular exp: 
    1) "g" FLAG
    2) "i" flag --> case insenstive 
*/
let reg4flag_g = /this/g;
let result4g = reg4flag_g.exec(s);
console.log("here is result for g flag", result4g);

let reg4flag_i = /thIS/i;
let result4i = reg4flag_i.exec(s);
console.log("here is result for i flag", result4i);

//more function for reg Exp:.
console.log(result.input);
console.log(result.index)
console.log("******** flags,input,index,.exe function end**********");

console.log("---test() function start----");
//"Test Function" return true or False
let reg4test = /kida/;
let s4test = "hello g ki hal a ?";
let result4test = reg4test.test(s4test);

//  if(result4test){
console.log("is kida mention in string" + "  ", result4test);
//     console.log(result4test.input);
// console.log(result4test.index)
//  }
console.log("******** Test() function end**********");

console.log("--- Match() function start----");
// match() use with  string and it will return null or an array.
let reg4match = /match()/;
let s4match = "this is match() function";
//common mistake is syntax error
    /*wrong syntax:
        let res4match = reg4match.match(s4match)
    
    */ 
   /*correct syntax:
        let res4match = s4match.match(reg4match)
    
    */ 
   let res4match = s4match.match(reg4match)
   console.log(res4match);
   console.log("******** match() function end**********");
   //search(),return index of first match else -1;

   console.log("---search() function start----");
   let reg4search = /is/;
   let s4search = "this is search function";
   let res4search = s4match.search(reg4search)
   console.log(res4search);

   console.log("******** search() function end**********");

   ///replace()
   console.log("---replace() function start----");
   let reg4replace = /is/;
   let reg4replaceall = /is/g;
   let s4replace = "this is replace function";
   let res4replace = s4replace.replace(reg4replaceall,'joban ')
   console.log(res4replace);

   console.log("******** replace() function end**********");