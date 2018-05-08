/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  var filtered = arr.filter(removeVar);
  return filtered;
}

function removeVar(val){
  return val;
}

bouncer([7, "ate", "", false, 9]);
