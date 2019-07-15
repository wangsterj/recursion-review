// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //base cases:
    // number
    // String
    // boolean
    // undefined null
  // special cases
    // arrays
    
  if (Array.isArray(obj)) {
    var result = "";
    var first = true;
    for (var i =0; i < obj.length; i++) {
      if (!first) {
        result += ", " + stringifyJSON(obj[i]);
        first = false;
      }
      else {
        result += stringifyJSON(obj[i]);
      }
    }
    return result;
  }
    // objects
  return ''+obj;
};
