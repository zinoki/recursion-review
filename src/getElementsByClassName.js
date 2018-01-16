// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Iterate through DOM Nodes & Children
  // Look for targetClassName, add it to results array
  // Recursively call func. for each child node with above steps

  results = [];

  var getElementsByClassNameRecursive = function(className, node) {
    if (node.className !== undefined && node.className.split(" ").indexOf(className) !== -1) {
      results.push(node);
    }

    for (var i=0; i < node.childNodes.length; i++){
      getElementsByClassNameRecursive(className,node.childNodes[i]);
    }
    
    return;

  };

  getElementsByClassNameRecursive(className, document.body);

  return results;

};
