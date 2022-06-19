//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

/*

const x = Number(prompt('X'))
const k = Number(prompt('K'))

const denklem = (x, k) => {
    return y = 3 * x + 4 * k
}
alert(denklem(x, k))


*/

//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

/*

const derece = Number(prompt('°C'))
const fahrenheit = (derece) => {
    return (derece * 9 / 5) + 32
}
alert(fahrenheit(derece))

*/


//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

/*
const sayi = Number(prompt('Sayı'))
const negatifPozitif = (sayi) => {
    if (sayi < 0) {
        return 'Negatif'
    } else {
        return 'Pozitif'
    }
}
alert(negatifPozitif(sayi))
*/

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

/*
const password = prompt('Parola')
const repassword = prompt('Parola Tekrar')
const passwordKontrol = (password, repassword) => {
    if (password === repassword) {
        return 'Parola Doğru'
    } else {
        return 'Parola Yanlış'
    }
}
alert(passwordKontrol(password, repassword))
*/

//ÖDEV-5 (if-else for break continue)
//Fonksiyonlarla yapılsın
//Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

const baslangicSayi = 1;
const secretKey = 44;

const myFunction = (baslangicSayi, bitisSayi) => {
    document.writeln(`Toplam ${bitisSayi} sayı var. <br>`)
    document.writeln(`${toplam(baslangicSayi, bitisSayi)}. <br>`)
    document.writeln(` ${tekSayi(baslangicSayi, bitisSayi)}. <br>`)
    document.writeln(` ${ciftSayi(baslangicSayi, bitisSayi)}. <br>`)
}

const toplam = (baslangicSayi, bitisSayi) => {
    let toplam = 0;
    for (let i = baslangicSayi; i <= bitisSayi; i++) {
        toplam += i;
    }
    return toplam
}
const tekSayi = (baslangicSayi, bitisSayi) => {
    let tekSayiToplam = 0;
    let tekSayi = [];
    let count = 0;
    for (let i = baslangicSayi; i <= bitisSayi; i++) {
        if (i === 7) {
            continue;
        }
        if (i % 2 !== 0) {
            tekSayiToplam += i;
            tekSayi.push(i);
            count++;
        }
    }
    return `${count} tane tek sayı var. Toplamları: ${tekSayiToplam}. Tek Sayılar: ${tekSayi}`
}
const ciftSayi = (baslangicSayi, bitisSayi) => {
    let ciftSayiToplam = 0;
    let ciftSayi = [];
    let count = 0;
    for (let i = baslangicSayi; i <= bitisSayi; i++) {
        if (i % 2 === 0) {
            ciftSayiToplam += i;
            ciftSayi.push(i);
            count++;
        }
    }
    return `${count} tane çift sayı var. Toplamları:  ${ciftSayiToplam}.  Çift Sayılar: ${ciftSayi}`
}

const islem = (bitisSayi) => {
    switch (true) {
        case bitisSayi === 44:
            alert('Programı durdu')
            break;
        case bitisSayi < 1:
            alert('Başlangıç sayısından küçük olamaz')
            return islem2()

        case bitisSayi > 100:
            myFunction(1, 100)
            break;
        default:
            myFunction(1, bitisSayi)
            break;
    }
}
const islem2 = () => {
    const bitisSayi = Number(prompt('Bitiş Sayısı'))
    islem(bitisSayi)
}
islem2()

