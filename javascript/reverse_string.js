function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
      reversed = reversed + str[i];
  }

  return reversed;
}

console.log("hi")
console.log(reverseString('hi'));

console.log(reverseString('kimberly'));
console.log(reverseString("Mark Bauer"));
console.log(reverseString("The quick brown fox jumped over the lazy dog"));
console.log(reverseString(""))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
