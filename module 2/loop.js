function loop(value, test, update, body) {
    while (test(value)) {     // Check if the test function returns true for the current value
      body(value);            // Execute the body function with the current value
      value = update(value);  // Update the value using the update function
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // Output: 3, 2, 1
  