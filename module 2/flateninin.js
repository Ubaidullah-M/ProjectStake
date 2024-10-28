let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
