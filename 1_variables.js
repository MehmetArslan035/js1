/* ---------------------------------- */
/*      JAVASCRIPT DE DEĞİŞKENLER     */
/* ---------------------------------- */

// const let var

// const let 
// ES6dan sonra gelen yapılardır
// Değişken tanımlama için kullanılır

//! CONST
// const : constant : sabit 


const tckn = 1234564789
// tckn = 546513215648
// ALınacak hata 
//2-variables.js:16 Uncaught TypeError: Assignment to constant variable.

//!LET 

let toplam = 0
console.log(toplam)

toplam= 50
console.log(toplam)


// GLOBAL ALAN
const abc = 50
{
    console.log(abc)
}
console.log(abc)

// LOCAL ALAN
let deneme = "denendi başarılı olundu"

function test() {
    console.log(deneme)
}

test()
console.log(deneme)

// VAR
{
    var number = 25
}

console.log(number)

function test1() {
    var num =  4444444444
    console.log(num)
}

test1()