/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {

  let args = Array.prototype.slice.call(arguments);
  args.splice(0,1);

    var resultArray = [];

  for(let i=0; i < arr.length; i++){
    for (let j=0; j < args.length; j++){

      if (args[j] == arr[i]){
        delete arr[i];
      }

    }
  }

  resultArray = arr.filter(remove);
   return resultArray;

}

function remove(removeFalse){
  return Boolean(removeFalse);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
