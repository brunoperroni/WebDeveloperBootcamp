// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// ======================================

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// ================================
// ================================

//Exercício de programação 31: Our First For Loop Practice
// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let num = 1; num <= 6; num += 1) {
    console.log('Da ba dee da ba daa');
}

//Exercício de programação 32: More For Loops Practice
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let num = 25; num >= 0; num -= 5) {
    console.log(num);
}
