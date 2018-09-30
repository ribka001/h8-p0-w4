// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

function changeMe(arr) {
  if(arr.length === 0){
    return ""
  }

  for(var j = 0; j < arr.length; j++){
    var person = {};  
    person["firstName"] = arr[j][0];
    person["lastName"] = arr[j][1];
    person["gender"] = arr[j][2];
    if (arr[j][3] === undefined){
      person["age"] = "Invalid Birth Year"
      }else{
      person["age"] = 2018 - arr[j][3]
      }
  console.log(j+1 + ". " + person["firstName"] + " " + person["lastName"] +": ")
  console.log(person)
  }
    
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""