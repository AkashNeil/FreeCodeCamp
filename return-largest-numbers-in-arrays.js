/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {

  var largestNumber = [0,0,0,0];

  // loop over array
  for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {

 // loop over sub array
    for (var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++){

      if ( arr [arrayIndex][subArrayIndex] > largestNumber[arrayIndex]){
        largestNumber[arrayIndex] = arr [arrayIndex][subArrayIndex];
      }

    }

  }

  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
