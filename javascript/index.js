// function reverseStr(str) {   //declare the function name the parameter
//     let reversed = "";      // this creates an empty string variable named reversed; we will store the reversed string version in this variable
//     for (let i = str.length - 1; i > -1; --i) {  //this line starts a loop to iterate over the characters in a string starting at the end of the string; the i = str.length -1 is the instruction to start at thee end; it will continue as long as i is greater than or equal to -1; the --i decrements the i in each loop to move backward through the string
//         reversed = reversed + str[i];  //inside the loop, the line appends each charachter of the input string 'str' to the 'reversed' string which builds the string backwards or reversed from the original string
//     }
//     return reversed;  //this returns the reversed string
// }

// function reverseString = (str) {
//     let reversed = "";
//     for (let i = str.length - 1; i > -1; --i) {
//         reversed = revesed + str[i];
//     }
//     return reversed;
// }

// const reverseString = (str) => {
//     let reversed = "";
//     for (let i = str.length - 1; i > -1; --i) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// const reverseString = (str) => {
//     let reversed = "";
//     for (let i = str.length - 1; i > -1; --i) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// const reverseStr = (str) => {
//     let reversed = "";
//     for (let i = str.length - 1; i > -1; --i) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i > -1; --i) {
        reversed = reversed + str[i];
    }
    return reversed;
}

// function reverseString(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i > -1; --i) {
//         reversed = reversed + str[i];
//     }

//     return reversed;
// }

console.log("hi")
console.log(reverseString('hi'));

console.log(reverseString('kimberly'));
console.log(reverseString("Mark Bauer"));
console.log(reverseString("The quick brown fox jumped over the lazy dog"));
console.log(reverseString(""))
