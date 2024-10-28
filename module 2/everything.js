function every(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false; // If any element does not satisfy the test, return false
      }
    }
    return true; // All elements passed the test, so return true
}

console.log(every([1, 3, 5], n => n < 10)); // true
console.log(every([2, 4, 16], n => n < 10)); // false
console.log(every([], n => n < 10)); // true (an empty array returns true)

  