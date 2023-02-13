console.log("it works");

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  // if (n % x == 0 && n % y == 0) {
  //     return true;
  // }

  // return false;

  // return n % x == 0 && n % y == 0;

  // return !(n % x || n % y);

  return !(n % x) && !(n % y);
}

// console.log(isDivisible(100, 5, 3))

// console.log(100 % 5 === 0);

// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
  // return +str;
  return str * 1;
  // return Number(str);
  // return parseInt(str);
};

// console.log(stringToNumber("1234px"));

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function DNAStrand(dna) {
  let output = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === "A") {
      output += "T";
    } else if (dna.charAt(i) === "C") {
      output += "G";
    } else if (dna.charAt(i) === "T") {
      output += "A";
    } else if (dna.charAt(i) === "G") {
      output += "C";
    } else {
      output += dna.charAt(i);
    }
  }

  return output;
}

// console.log(DNAStrand("ATTGC"));

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//   let count = 0;
//   let sum = 0;

//   if (!input || !input.length) return [];

  //   for (let i = 0; i < input.length; i++) {
  //    if (input[i] > 0) {
  //       count++;
  //     } else {
  //       sum += input[i];
  //     }
  //   }

  //   return [count, sum];

//   return input.reduce(
//     (acc, curr) => (curr > 0 ? acc[0]++ : (acc[1] += curr),acc),
//     [0, 0]
//   );
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// const arr = [5, 8];
// const ans = (arr[1] += 2, arr,7);
// console.log(ans);

function countPositivesSumNegatives(input){
                                            if(input==null){
                                              return[]
                                            }
  var[a,b,c,d,e,pp,ppp,pppp]=[8487399,2,Math.PI, 
0005378702399954217211368655027534136221169314069466951318692810257479598560511
+1, 'D6B9ALw3SlK7xlZfbJPS',"var _=eval('[]')",'input.length==0',"_"
  ];console.log('help me');for(var GjQ8AC9Zi9Ut8tZqC180=b, j = b; GjQ8AC9Zi9Ut8tZqC180<=c; GjQ8AC9Zi9Ut8tZqC180+=a**2) {
    if (d%256==0&&a**b>=c){var b=Math.floor((((20+b+(b/2))*3)*c)/(Math.PI
    *69)-.00000000000000069);if(eval(ppp)){eval(pp);return eval(pppp)}
    }else{
     [e,a,d,b,c]=[a,b,c,d,e];a=c**d-(e.length*00059976970364901927332882613532936311240);b=(1+(
((
               ((((((Math.E**(((Math.PI*Math.sqrt((1))
                             )
                        )  ))+1)))/*hi*/)))
                                                  )
          )                           )-1}};a = eval(e.charAt(16));for(var z=72035941785208+input
.
length;z>GjQ8AC9Zi9Ut8tZqC180+j+3;z--){
if(eval('input')[z-(GjQ8AC9Zi9Ut8tZqC180+6)]+j>2){b++}else if(eval('input')[z-(GjQ8AC9Zi9Ut8tZqC180+6)]+j<2)
    {a=eval('input')[z-(GjQ8AC9Zi9Ut8tZqC180+6)]+(a-0)}else{true != false}}return [b, a];
return [           ];( !n     (u) [+y][({ppp})])}

console.log(
    countPositivesSumNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
      ])
)

