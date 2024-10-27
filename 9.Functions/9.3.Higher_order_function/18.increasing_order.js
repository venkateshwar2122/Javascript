//check that in an array all elements are in increasing order or not


/* GETTING ERROR IN THIS
let numbers = [2,4, 6, 8, 10];

let r = numbers.every((ele,index,arr) => {
  if(arr[index]<=arr[index+1]){
      return true
      
  }
  else{
      return false
  }
});

Output is coming false

chatgpt reason:
The code snippet checks if the elements in the array numbers are in non-decreasing order. However, there's
an issue: for the last element in the array, arr[index + 1] will be undefined, leading to an unnecessary comparison.

To avoid this issue, you can modify the code to ensure it doesn't try to access arr[index + 1] when
index is the last index in the array.


*/


let numbers = [2, 4, 6, 8, 10];

let r = numbers.every((ele, index, arr) => {
  if (index === arr.length - 1 || arr[index] <= arr[index + 1]) {
    return true;
  } else {
    return false;
  }
});

console.log(r); // true, because the array is in non-decreasing order
