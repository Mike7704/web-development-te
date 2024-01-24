import { test, expect } from "vitest";

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function countLetters(a) {
  return a.length;
}

test("add function adds two numbers", function () {
  const result = add(1, 2); // What my function returns
  const expected = 3; // What my function should return
  expect(result).toBe(expected); // Expect my function to return 3
});

test("subtract function subtracts two numbers", function () {
  const result = subtract(5, 3); // What my function returns
  const expected = 2; // What my function should return
  expect(result).toBe(expected); // Expect my function to return 2
});

test("multiply function multiplies two numbers", function () {
  const result = multiply(5, 2); // What my function returns
  const expected = 10; // What my function should return
  expect(result).toBe(expected); // Expect my function to return 10
});

test("divide function divides two numbers", function () {
  const result = divide(10, 2); // What my function returns
  const expected = 5; // What my function should return
  expect(result).toBe(expected); // Expect my function to return 5
});

test("Count letters function counts number of letters", function () {
  const result = countLetters("hello"); // What my function returns
  const expected = 5; // What my function should return
  expect(result).toBe(expected); // Expect my function to return 5
});
