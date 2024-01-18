/**
 * Adds together all the numbers in an array
 *
 * @param {*} arr - An array of numbers
 * @returns {number} The sum of the array
 */
function AddNumbers(arr) {
  let sum = 0;

  for (let a of arr) {
    sum += a;
  }
  return sum;
}

let myArray = [1, 2, 3, 4];
console.log(AddNumbers(myArray));
