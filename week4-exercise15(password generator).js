/*Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/
function changeVocals (str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  for (var i = 0; i < str.length; i++){
    switch (str[i]){
      case 'a' : {temp = temp + alphabet[1];break;}
      case 'A' : {temp = temp + alphabet[1].toUpperCase();break;}
      case 'i' : {temp = temp + alphabet[9];break;}
      case 'I' : {temp = temp + alphabet[9].toUpperCase();break;}
      case 'u' : {temp = temp + alphabet[21];break;}
      case 'U' : {temp = temp + alphabet[21].toUpperCase();break;}
      case 'e' : {temp = temp + alphabet[5];break;}
      case 'E' : {temp = temp + alphabet[5].toUpperCase();break;}
      case 'o' : {temp = temp + alphabet[15];break;}
      case 'O' : {temp = temp + alphabet[15].toUpperCase();break;}
      default : {temp += str[i];}
    }
  }
  return temp
}

function reverseWord (str) {
  var temp=""
  for (var i = str.length-1; i >=0; i--) {
    temp+=str[i]
  }
  return temp
}

function setLowerUpperCase (str) {
  var temp=""
  for (var i=0; i<str.length; i++){
    if (str[i]===str[i].toUpperCase()) {
      temp+=(str[i].toLowerCase())
    }
    else {
      temp+=(str[i].toUpperCase())
    }
  }
  return temp
}

function removeSpaces (str) {
  var temp = ""
  for (var i = 0; i < str.length; i++){
    if (str[i] !== " "){
      temp+= str[i]
    }
  }
  return temp
}

function passwordGenerator (name) {
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  var listChangeVoc = changeVocals (name)
  var listReverse = reverseWord (listChangeVoc)
  var listSetLowUp = setLowerUpperCase (listReverse)
  var listRemoveSpace = removeSpaces (listSetLowUp)
  return listRemoveSpace
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'