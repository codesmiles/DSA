"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = (a, b) => {
    let sum = 0;
    for (let i = 0; i <= b; i++) {
        sum += a;
    }
    return sum;
};
// console.log(product(6, 10));
const power = (a, b) => {
    if (b < 0) {
        return 0; // error
    }
    else if (b == 0) {
        return 1;
    }
    else {
        return a * power(a, b - 1);
    }
};
// console.log(power(3, 6));
const mod = (a, b) => {
    if (b <= 0) {
        return -1;
    }
    let div = a / b;
    // console.log(div * b)
    // console.log(a - div);
    return a - (div * b);
};
// console.log(mod(10, 4));
function sum(a, b) {
    return a + b;
}
const charCount = (str) => {
    const obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
};
const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) {
        // lower alpha (a-z)
        return false;
    }
    return true;
};
console.log(charCount("Hello World"));
exports.default = {
    product,
    power,
    mod,
    sum
};
