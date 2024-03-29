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
