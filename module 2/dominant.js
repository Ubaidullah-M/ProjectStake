// Helper function to determine the script of a character
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }
  
  // Helper function to count items by group
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name === name);
      if (known === -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  // Main function to find the dominant writing direction
  function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({ name }) => name !== "none");
  
    if (counted.length === 0) return "ltr";
    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  
  // Example scripts data for testing
  const SCRIPTS = [
    { name: "Latin", ranges: [[65, 91], [97, 123]], direction: "ltr" },
    { name: "Arabic", ranges: [[1536, 1792]], direction: "rtl" },
    // Add other scripts as needed
  ];
  
  // Test the function
  console.log(dominantDirection("Hello!")); // Expected output: "ltr"
  console.log(dominantDirection("Hey, مساء الخير")); // Expected output: "rtl"
  