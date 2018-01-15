// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;

  } else if (typeof obj === 'string') {
    return '"' + obj + '"';

  } else if (Array.isArray(obj)) {
    var result = '';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    return '[' + result.slice(0, result.length-1) + ']';
  
  } else if (typeof obj === 'object'){
    var result = '';
    for (var key in obj) {
      if (key === 'functions' || key === 'undefined') {
        continue;
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    return '{' + result.slice(0, result.length-1) + '}';

  } 
  
};
