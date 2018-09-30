/*Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.*/

function checkAB(num) {
    var numSplit=num.split(" ").join("")
    var indexA =[]
    var indexB=[]
    for (var i = 0; i < numSplit.length; i++) {
      if (numSplit[i] == "a") {
        indexA.push(i)
      }
      else if (numSplit[i] == "b") {
        indexB.push(i)
      }
  }
      for (var i = 0; i < indexA.length; i++) {
        for (var j = 0; j< indexB.length; j++) {
            if (indexB[i]-indexA[j] <= 3 && indexB[i]-indexA[j]>1) {
                return true
            }
        }
    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false