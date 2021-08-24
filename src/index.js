
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  if(!matrix) {
    return newMatrix;
  }

  for(let i = 0; i < matrix.length; i++) {
	  let arr = matrix[i];
	  if(i % 2 === 0) {
		  for(let j = 0; j < arr.length; j++) {
			  newMatrix.push(arr[j]);
		  }
	  } else {
		  for(let j = arr.length-1; j >= 0; j--) {
			  newMatrix.push(arr[j]);
		  }
	  }
	  
  }
	return newMatrix
}
