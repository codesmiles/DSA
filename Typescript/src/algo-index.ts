const product = (a: number, b: number): number | void => {
  let sum: number = 0;
  for (let i: number = 0; i <= b; i++) {
    sum += a;
  }
  return sum;
};

// console.log(product(6, 10));

const power = (a: number, b: number): number => {
  if (b < 0) {
    return 0; // error
  } else if (b == 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
};

// console.log(power(3, 6));

const mod= (a:number, b:number):number => {
if (b <= 0) {
return -1;
}
    let div: number = a / b;
    // console.log(div * b)
    // console.log(a - div);
return a -(div * b);
}

// console.log(mod(10, 4));

function sum(a:number, b:number) {
  return a + b;
}

const charCount = (str: string): object => { 
  const obj:object = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) { 
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}


const isAlphaNumeric = (char: string): boolean => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
};

console.log(charCount("Hello World"));

export default {
    product,
    power,
    mod,
    sum
}