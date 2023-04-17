// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe ("codedMessage", () => {
//   it ("will take in a string as a parameter and return a string with a coded message", () => {
//       expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
      
//   })
// })
 //Good Failure
 // Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.166 s

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Process
// Create a funtion called "codedMessage" that takes in a string as a parameter
// Convert the string parameter to lowercase and store it into a new varible "string"
// Create an empty string that will store the coded message
// Use a for loop that will analyze each character in the string
// Create a conditional statement that will check if each character is "a,e,i,o", if so then replace them with 4310
// return the coded message using the "finalMessage" variable

// const codedMessage = (strings) => {
//     let string = strings.toLowerCase()
//     let finalMessage = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a") {
//             finalMessage += "4"
//         } else if (string[i] === "e") {
//             finalMessage += "3"
//         } else if (string[i] === "i") {
//             finalMessage += "1"
//         } else if (string[i] === "o") {
//             finalMessage += "0"
//         } else {
//             finalMessage += strings[i]
//         }
//    }
//    return finalMessage

// }

// Test Passed
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.134 s, estimated 1 s


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe ("words", () => {
//     it ("will take in an array and a single letter as a parameter and return an array of all the words with that particular letter", () => {
//         expect(words(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(words(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        
        
//     })
//   })

//   // Good Failure
//   // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.17 s, estimated 1 s

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Process
// Create a function called "words" that takes in an array and a letter as parameters
// Create an empty array that will store our final outcome
// Create a for loop that will loop through the array 
// Convert the letter parameter to lower case using the ".toLowerCase()" method
// Convert the current word to lower case
// Create a conditional statement that checks for the index of the letter in the word
// If the word contains the letter then it will be pushed into the new array
// return "finalArray"


// const words = (array1,letter1) => {
//     let finalArray = [] 
//     for (let i = 0; i<array1.length; i++) {
//         let letter2 = letter1.toLowerCase()
//         let word = array1[i].toLowerCase()
//         if (word.indexOf(letter2)!== -1) {
//             finalArray.push(array1[i])
//         }
//     } return finalArray
// }

// Test Passed
//Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.157 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// describe ("fullHouse", () => {
//     it ("will take in an array of 5 numbers as a parameter and determines if the array is a fullhouse", () => {
//         expect(fullHouse(hand1)).toEqual(true)
//         expect(fullHouse(hand2)).toEqual(false)
//         expect(fullHouse(hand3)).toEqual(false)
//         expect(fullHouse(hand4)).toEqual(true)
        
        
//     })
//   })


// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.174 s, estimated 1 s
// // Ran all test suites.


// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Process
// Create a function called fullHouse that takes in an array of numbers as a parameter
// Sort those numbers from least to greatest
// Create a conditional statement that will check if the first two numbers are the same
// Within the same conditional statment check if the last three numbers are the same
// If both conditonal statments are true then return true
// Create another conditional statement that will check if the first three numbers are the same
// Within the same conditional statment check if the last two numbers are the same
// If both conditonal statments are true then return true
// Otherwise return false

// const fullHouse = (num) => {
//     num.sort()
//     if (num[0]=== num[1]&&num[1]!== num[2]){
//         if (num[2]=== num[3]&&num[3]=== num[4]) {
//             return true
//         } 
//     } 
//     if (num[0]=== num[1]&&num[1]=== num[2]){
//         if (num[2]!== num[3]&&num[3]=== num[4]) {
//             return true
//         } 
//     }
//     return false
// }

// test passed

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.164 s, estimated 1 s
// Ran all test suites.
