/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {

  var finalString = "";



  while ( num > 0) {
    finalString += str;
    num--;
  }


  return finalString;
}

repeatStringNumTimes("abc", 33);
