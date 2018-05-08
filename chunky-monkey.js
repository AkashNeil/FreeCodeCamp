/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {

  let finalArray = [];

  let x = 0;

  for (; x < arr.length; x+=size){

    finalArray.push(arr.slice(x, x+size));
  }

  return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
