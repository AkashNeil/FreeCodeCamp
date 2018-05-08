/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {

  var splitStr = str.split(' ');
  var longestWord = 0;

  for (i = 0; i < splitStr.length; i++) {

   if ( splitStr[i].length > longestWord ) {
     longestWord = splitStr[i].length;
   }

  }

  return longestWord;

}

findLongestWord("The quick brown fox jumped over the lazy dog");
