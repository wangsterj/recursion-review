// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  if(node === undefined) {
    node = document.body;
  }

  var results = [];
  
  if(node.classList !== undefined){
    if(node.classList.contains(className)) {
      results.push(node);
    }
  }
  var childNodeList = node.childNodes;
  for (var i = 0; i < childNodeList.length; i++) {
    results = results.concat(getElementsByClassName(className, childNodeList[i]));
  }
  
  return results; 
  // your code here
};
