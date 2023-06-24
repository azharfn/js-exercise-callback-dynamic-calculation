//PROGRAM 1 ORIGINAL
function calculate(number1, number2, callback) {
    // 3 kondisi dalam program menggunakkan callback function
    // 1.jika ganjil number1 maka akan dikalikan
    let result;
    if (number1 %2 !== 0) { //cek ganjil genap denga modulus %2 cek apa tidak genap
      result = number1 * number2; 
    }
    else {
      //2.Jika number1 dan number2 merupakan bilangan genap, maka dikurang
      if (number2 %2 === 0) { // cek apa genap
        result = number1 - number2;
      }//3.Jika number1 merupakan bilangan genap dan number2 merupakan bilangan ganjil, maka ditambah
      else {// else jika number2 bukan genap di cek
        result = number1 + number2;
      }
    }
    
    callback(result);
  }
// //==================================================================
//   //PROGRAM 2 KEBALIKAKN ORIGIN
//   function calculate(number1, number2, callback) {
//     /*3 KONDISI
//     -number1 genap dikalikan
//     -number1 dan 2 ganjil dikurang
//     -number1 ganjil dan 2 genap ditambah
//     */
//     let result;
//     if (number1 %2 === 0) { // cek apa ada genap
//       result = number1 * number2; 
//     }
//     else {
      
//       if (number2 %2 !== 0) { //cek apa ganjil dua2nya
//         result = number1 - number2;
//       }
//       else { // cek sisanya apa ada selain ganjil
//         result = number1 + number2;
//       }
//     }
//     callback(result);
//   }

  function callback(result){
    console.log(result);
  }
  //output origin
  calculate(3,11, callback) // jika number1 ganjil di kalikan *
  calculate(10,6, callback) // jika 2 input genap maka di kurang -
  calculate(10,3, callback) // jika genap ganjil maka di tambah
  //output
  // /*33
  // 4
  // 13*/

  //output kebalikan
//   calculate(4,11, callback) // jika number1 genap di kalikan *
//   calculate(11,7, callback) // jika 2 input ganjil maka di kurang -
//   calculate(15,4, callback) // jika ganjil genap di tambah
// /*output
// 44
// 4
// 19
// */




  module.exports = calculate;
  