//Random
// document.writeln( Math.round((Math.random()*4+1))+"<br>");

//if else
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
var inputNumber = Number(prompt("Bir sayı giriniz: "));
for (let i = 0; i < 5; i++) {
  
  if (inputNumber == randomNumber) {
    document.write("<span>Tebrikler!</span>");
    break;
  } 
   if(i<4) {
    inputNumber = Number(prompt("Tekrar deneyiniz: "));
  }
   else document.write("<span>Üzgünüm, sayıyı bilemediniz!</span>");
}
