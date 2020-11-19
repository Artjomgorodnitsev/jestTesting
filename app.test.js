const { test, expect } = require('@jest/globals');
const functions = require('./app');

test('Add 2 + 2 to equal 4', ()=>{
    expect(functions.addTwoNumbers(2,2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 4', ()=>{
    expect(functions.addTwoNumbers(2,2)).not.toBe(5);
});

test('Should be NULL', ()=>{
    expect(functions.returnNull()).toBeNull();
});

test('Should not be falsy', ()=>{
    expect(functions.checkInput(test)).not.toBeFalsy();
});