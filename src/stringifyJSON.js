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
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = "";
    var first = true;
    for (var i =0; i < obj.length; i++) {
      if (!first) {
        result += "," + stringifyJSON(obj[i]);
      }
      else {
        result += stringifyJSON(obj[i]);
        first = false;
      }
    }
    return "["+result+"]";
  } else if (typeof obj === "object") {// objects
      if (obj === null) {
        return '' + obj;
      }
    var result = "";
    var first = true;
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== "function") {
        if (!first) {
          result += ',"'+key + '":' + stringifyJSON(obj[key]);
        }
        else {
          result += '"'+key + '":' + stringifyJSON(obj[key]);
          first = false;
        }
      }
    }
    return "{"+ result +"}";
  }
  return ''+obj;
};

