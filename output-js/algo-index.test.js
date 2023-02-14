"use strict";
// import { product, mod, power } from './algo-index';
const { sum } = require('./algo-index');
const test;
("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});
