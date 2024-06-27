/* ---------------------------------- */
/*              DATA TYPE             */
/* ---------------------------------- */

/* ---------------------------------- */
//!       PRIMITIVE DATA TYPES        */
/* ---------------------------------- */

// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt
z = "5";
x = null;
let y ;
console.log(x);
console.log(y);

console.log(typeof x);
console.log(typeof y);
console.log(z);
console.log(typeof z);

//! number
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas = 40;
sayi = 15

sonuc = yas + sayi
console.log(sonuc)
let pi = Math.PI
console.log(pi)

//? Ondalıklı kısmı düzenlemek içinkullanılan yöntemler

//! round! 
let yuvarla = Math.round(pi)
console.log("round",yuvarla)
// tam kısmı al
//! trunch! 
let tamkisim = Math.trunc(pi)
console.log("trunc",tamkisim)

// yukarı yuvarla
//! ceil! 
let ceil = Math.ceil(pi)
console.log("ceil",ceil)
//aşağıya yuvarla
//! floor! 
let floor = Math.floor(pi)
console.log("floor",floor)

//to fixed
let fixedSonuc = pi.toFixed(2)
console.log(fixedSonuc)

//!RANDOM metodu
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.clear()

let rasgele = Math.trunc(Math.random()*10)
console.log(rasgele)
//! üs alma
console.log(Math.pow(5, 3))
//! karekök alma
console.log(Math.sqrt(144))

/* ---------------------------------- */
/*          STRING DATA TYPE          */
/* ---------------------------------- */

// string bu şekilde içindeki değere ulaşılır ama değiştirilemez.
// immutable
let isim = "Beni doğum günüm \"18 haziran\"" //kaçış operatörü
let str1 = 'merhaba dünya'
let str2 = `benim adım ${isim}`
let str3 = `${str1} nasılsın`
let str4 = `Beni doğum günüm "18 haziran"`
let str5 = new String("hello world")



console.log(typeof isim)
console.log(typeof str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log(typeof str5, str5)

console.log(str1[0])
console.log(str1[1])

// str1[0] = "D"
// console.log(str1)

// stringleri dinamik olarak kullanmayı sağlar
// `` 
// stringler yazılırken değişkenlerde kullanabilmemizi sağlar
let tckn = 354156654467
const isims = "harvey"

let cumle = `müsterimizin tcsi: ${tckn}dir adı: ${isims} dir`
console.log(cumle)


/* ---------------------------------- */
/*               BOOLEAN              */
/* ---------------------------------- */

let deger = false
let xyz = undefined

console.log(Boolean(xyz))
let sifre = 1235

if (sifre===1234) {
    console.log("şifre doğru")
} else {
    console.log("şifre yanlış")
}

/* ---------------------------------- */
/*                NULL                */
/* ---------------------------------- */

let personel = null;
console.log(typeof personel)
console.log(null + 5) 

/* ---------------------------------- */
/*              UNDEFINED             */
/* ---------------------------------- */

let telno;
console.log(telno)
console.log(typeof telno)

 telno = +90555555555
 console.log(typeof telno, telno)


//  let fixedSonuc = pi.toFixed(2)
console.log(typeof fixedSonuc)

let num1 = 10;
let strnum = "99"
let str6 = "nerde o eski ramazanlar"
let birlestir = num1 + str6
console.log(birlestir)

console.log(num1 * strnum)


/* ---------------------------------- */
/*                 NAN                */
/* ---------------------------------- */
//Not a number

console.log("harvey"/10)

let result = "lalalal"
console.log(result)
console.log(isNaN(result))


/* ---------------------------------- */
//!       NON PRİMİTİVE DATA TYPES    */
/* ---------------------------------- */

//Array[], Object{}, function

let personelList = ["Ali","Veli","Ahmet"]
let personelData = {name:"Ali", surname:"Hakkı", age:35}


// function
function hesapla() {
    // ******

    return "toplam 5"
}