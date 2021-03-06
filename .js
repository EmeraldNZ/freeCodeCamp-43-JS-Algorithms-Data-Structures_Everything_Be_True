/**************  Solution #1   ************************************************************************************/

function truthCheck(collection, pre) {
  let counter = 0; // Create a counter to count how many cases are true
  for(let i = 0; i < collection.length; i++){
    if(collection[i][pre]){ // Access object properties through [] notation
      counter++;
    }
  }
  if(counter === collection.length){
    return true;
  }else{
    return false;
  }
  return pre;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], "sex"); // return true


/**************  Solution #2   ************************************************************************************/

function truthCheck2(collection, pre) {
  let counter = 0;
  for(let index in collection){ // Loop through indices of the passed array
  // If it is has property and value is truthy
    if(collection[index].hasOwnProperty(pre) && Boolean(collection[index][pre])){
      counter++;
    }
  }
  // Outside the loop, check to see if all of them are true and return true or false
  return counter === collection.length;
}



/**************  Solution #3   ************************************************************************************/

function truthCheck3(collection, pre) {
// For every object in the collection array, check if the value returned from the callback is truthy
  return collection.every(obj => obj[pre]);
}


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true/
