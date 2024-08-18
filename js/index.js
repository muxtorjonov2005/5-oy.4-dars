// 1-masala
// function kattaKichikAjiratish(str){
//     let katta = 0
//     let kichkina = 0
//     for (const i of str) {
//         if(i === i.toUpperCase() && i !== i.toLowerCase()){
//             katta++
//         } else if(i !== i.toUpperCase() && i === i.toLowerCase()){
//             kichkina++
//         }
//     }
//     return {kattaxarf: katta, kichkinaxarf: kichkina}
// }
// console.log(kattaKichikAjiratish('SAlom DunyO'));

// 2-masala
// function isPalindrom(word) {
//     const reversed = word.split('').reverse().join('');
//     return word.toLowerCase() === reversed.toLowerCase();
// }

// function findPalindromSoz(text) {
//     const words = text.split(/\W+/)
//     const palindromes = []
//     for (const word of words) {
//         if (isPalindrom(word) && word.length > 1) { 
//             palindromes.push(word)
//         }
//     }
//     return palindromes
// }
// console.log(findPalindromSoz('salom non ada dunyo'))

// 3-masala
// function findTakroriySon(arg){
//     let res = {}
//     let arr = []
//     for (const i of arg) {
//         res[i] = (res[i] || 0) + 1
//     }
//     for (const i in res) {
//         if(res[i] > 1){
//             arr.push(parseInt(i))
//         }
//     }
//     return arr
// }
// console.log(findTakroriySon([1, 2, 3, 4, 5, 2, 6, 5, 1]));

// 4-masala
// function strToBinary(str) {
//     return str.split('').map(val => {
//         return val.charCodeAt(0).toString(2).padStart(8, '0');
//     }).join(' ')
// }
// console.log(strToBinary('Salom dunyo'))

// 5-masala
// function findFibonacci(n){
//     if(n <= 1){
//         return n
//     }
//     return findFibonacci(n - 1) + findFibonacci(n - 2)
// }
// console.log(findFibonacci(10));

// 6-masala
// function sumNum(n){
//     let str = String(n)
//     let sum = 0
//     for (const i of str) {
//         sum += Number(i)
//     }
//     return sum
// }
// console.log(sumNum(12345));

// 7-masala
// const morseCode = {
//     '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
//     '--.': 'G', '....': 't', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
//     '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
//     '...': 'S', '-': 'T', '..-': 'g', '...-': 'V', '.--': 'W', '-..-': 'X'
// }
// function decodeMorse(morseCodeStr) {
//     return morseCodeStr.split('   ').map(word => {
//         return word.split(' ').map(letter => morseCode[letter]).join('')
//     }).join(' ')
// }
// const morse = "... --- ..."
// console.log(decodeMorse(morse))

// 8-masala
// function teskariQilish(str){
//     return str.split(' ').map(val => val.split('').reverse().join('')).join(' ')
// }
// console.log(teskariQilish('salom dunyo'));

// 9-masala
// function isPrime(num){
//     if(num == 1 || num % 2 == 0){
//         return false
//     }
//     if(num == 2){
//         return true
//     }
//     for(let i = 3; i <= Math.sqrt(num); i += 2){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true
// }

// function filterTubNum(arg){
//     return arg.filter(isPrime)
// }
// console.log(filterTubNum([12, 3, 45, 67, 89, 13, 23]));

// 10-masala
// function caesarDecrypt(str, shift) {
//     return str.split('').map(char => {
//         if (char.match(/[a-z]/i)) {
//             const charCode = char.charCodeAt(0);
//             let base = (charCode >= 65 && charCode <= 90) ? 65 : 97
//             let decryptedChar = String.fromCharCode(((charCode - base - shift + 26) % 26) + base)
//             return decryptedChar
//         } else {
//             return char
//         }
//     }).join('')
// }
// const encryptedText = "Khoor Zruog"
// const shift = 3
// const decryptedText = caesarDecrypt(encryptedText, shift)
// console.log(decryptedText)