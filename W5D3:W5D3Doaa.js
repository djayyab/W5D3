/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.

*/
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        var acc = {};
    }
    each(coll, function (elemnt, key) {
        acc[key] = f(elemnt, key);
    });

    return acc;
}

function uppercaseValues(obj,f){
	return map(obj,function(element,key){
		if(typeof(element)=== 'string'){
			return element.toUpperCase
		}else{
			return element
		}
		

	})

}



/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/


function reduce(arr, f, acc  ) {
	if (acc === undefined) {
	  acc = arr[0];
	  arr = arr.slice(1);
	}
  ​
	each(arr, function(element, i){
	  acc = f(acc, element, i);
	});
  ​
	return acc;
  }
  
function sum(numbers) {
	return reduce(numbers,function(sum,element){
	 sqr = element*element
	 return sum + sqr
	},0)

}