/*Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.*/

function hitungHuruf(kata) {
  var arr = kata.split(' ');
  var base = 0;
  var output = "";
  for (var i = 0; i < arr.length; i++) {
    var inner = arr[i].split('');
    for (var k = 0; k < inner.length; k++) {
      for (var j = 0; j < inner.length; j++) {
        var count = 0;
        if (inner[j] === inner[k] && j !== k) {
          count++;
        }
        if (count > base) {
          base = count;
          output = arr[i];
        }
      }
    }
  }
  return output;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau